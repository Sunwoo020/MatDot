import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?:
      | ({
          id?: string | unknown;
        } & DefaultSession["user"])
      | unknown;
    accessToken?: string | unknown;
  }

  interface User {
    accessToken?: string;
  }
}
