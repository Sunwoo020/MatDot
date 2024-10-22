import { axiosInstance } from "@utils/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid credentials",
  AUTH_FAILED: "로그인에 실패하였습니다. 사용자 자격증명을 확인해주세요.",
};

async function authenticateUser(username: string, password: string) {
  try {
    const { data } = await axiosInstance.post(
      "/auth/login",
      {},
      {
        auth: {
          username,
          password,
        },
      }
    );
    return data;
  } catch (error) {
    // console.error("Failed to authenticate user:", error);
    throw new Error(ERROR_MESSAGES.AUTH_FAILED);
  }
}

const PROVIDER_CONFIGS = {
  NAVER: {
    clientId: process.env.NAVER_CLIENT_ID!,
    clientSecret: process.env.NAVER_CLIENT_SECRET!,
  },
  KAKAO: {
    clientId: process.env.KAKAO_CLIENT_ID!,
    clientSecret: process.env.KAKAO_CLIENT_SECRET!,
  },
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Da-Niim",
      credentials: {
        username: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소 입력 요망",
        },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
        }

        const data = await authenticateUser(
          credentials.username,
          credentials.password
        );
        if (data) {
          return { ...data, accessToken: data.accessToken };
        }
        return null;
      },
    }),
    NaverProvider(PROVIDER_CONFIGS.NAVER),
    KakaoProvider(PROVIDER_CONFIGS.KAKAO),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }): Promise<any> {
      session.user = token;
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({ baseUrl }): Promise<string> {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
});

export { handler as GET, handler as POST };
