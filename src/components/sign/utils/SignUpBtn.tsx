"use client";
import Btn from "@components/common/DefaultBtn";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <Btn
      label="Sign Up"
      onClick={() => router.push("/auth/signup")}
      type="submit"
      variant="primary"
      size="small"
    />
  );
}
