"use client";
import AuthButton from "./AuthBtn";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <AuthButton label="Sign Up" onClick={() => router.push("/auth/signup")} />
  );
}
