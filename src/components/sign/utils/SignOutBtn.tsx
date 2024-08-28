"use client";
import Btn from "@components/common/DefaultBtn";
import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/" });
    } catch (error) {}
  };
  return (
    <Btn
      label="Sign Out"
      onClick={handleSignOut}
      type="submit"
      variant="primary"
      size="small"
    />
  );
}
