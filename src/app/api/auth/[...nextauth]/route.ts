import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import { axiosInstance } from "@utils/axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "MatDot",
      credentials: {
        username: {
          label: "이메일",
        },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Invalid credentials");
        }

        try {
          const { data } = await axiosInstance.post(
            "/",
            // "/auth/login",
            /* 로그인 주소, 지금은 안됨 */

            {
              auth: {
                username: credentials.username,
                password: credentials.password,
              },
            }
          );
          return data ? { ...data, accessToken: data.accessToken } : null;
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Failed to authenticate user");
        }
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
