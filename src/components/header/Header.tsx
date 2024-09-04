"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./NavigationBar";
import MatDotLogo from "@assets/logo/MatDotLogo.png";
import SignInButton from "@components/sign/utils/SignInBtn";
import SignUpButton from "@components/sign/utils/SignUpBtn";
import SignOutButton from "@components/sign/utils/SignOutBtn";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row h-24">
      <Link href="/">
        <div className="flex items-center ml-12 w-full h-full cursor-pointer ">
          <Image src={MatDotLogo} alt="MatDot Logo" width={120} height={120} />
        </div>
      </Link>
      <div className="flex flex-row w-full justify-center">
        <NavigationBar />
      </div>
      <div className="flex mr-4 flex-row w-full justify-end">
        {session ? (
          <SignOutButton />
        ) : (
          <>
            <SignInButton />
            <SignUpButton />
          </>
        )}
      </div>
    </div>
  );
}
