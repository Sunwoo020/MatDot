"use client";
import AuthButton from "./AuthBtn";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  return <AuthButton label="Sign In" onClick={() => router.push("/login")} />;
}
