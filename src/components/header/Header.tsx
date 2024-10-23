"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./NavigationBar";
import MatDotLogo from "@assets/logo/MatDotLogo.png";
import * as SignBtn from "@components/sign/utils/SignBtn";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row h-24">
      <Link
        href="/"
        className="flex items-center ml-12 w-1/4 h-full cursor-pointer "
      >
        <Image
          src={MatDotLogo}
          alt="MatDot Logo"
          width={120}
          height={120}
          priority
        />
      </Link>
      <div className="flex flex-row w-full justify-center">
        <NavigationBar />
      </div>
      <div className="flex mr-4 flex-row w-full justify-end">
        {session ? (
          <SignBtn.SignOutBtn />
        ) : (
          <>
            <SignBtn.SignInBtn />
            <SignBtn.SignUpBtn />
          </>
        )}
      </div>
    </div>
  );
}
