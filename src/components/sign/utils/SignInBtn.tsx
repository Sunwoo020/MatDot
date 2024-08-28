"use client";
import Btn from "@components/common/DefaultBtn";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  return (
    <Btn
      label="Sign In"
      onClick={() => router.push("/login")}
      type="submit"
      variant="primary"
      size="small"
    />
  );
}
