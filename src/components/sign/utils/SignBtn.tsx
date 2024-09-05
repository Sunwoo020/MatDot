"use client";
import AuthButton from "./AuthBtn";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export function SignInBtn() {
  const router = useRouter();
  return <AuthButton label="Sign In" onClick={() => router.push("/login")} />;
}

export function SignOutBtn() {
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/" });
    } catch (error) {}
  };
  return <AuthButton label="Sign Out" onClick={handleSignOut} />;
}

export function SignUpBtn() {
  const router = useRouter();
  return (
    <AuthButton label="Sign Up" onClick={() => router.push("/auth/signup")} />
  );
}
