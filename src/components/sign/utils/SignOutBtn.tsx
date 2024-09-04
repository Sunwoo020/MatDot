"use client";
import AuthButton from "./AuthBtn";
import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/" });
    } catch (error) {}
  };

  return <AuthButton label="Sign Out" onClick={handleSignOut} />;
}
