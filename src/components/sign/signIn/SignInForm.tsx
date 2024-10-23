"use client";
import { signIn } from "next-auth/react";
import { FieldValues, useForm } from "react-hook-form";
import { SocialSignInBtn } from "../utils/SocialSignInBtn";
import Input from "@components/common/DefaultInput";
import Btn from "@components/common/DefaultBtn";
import Image from "next/image";
import MatDotLogo from "@assets/logo/MatDotLogo.png";

export default function SigninForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const result = await signIn("credentials", {
      username: data.id,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleSocialSignIn = async (provider: "kakao" | "naver") => {
    const result = await signIn(provider, {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col items-center justify-center w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center h-full pb-2">
          <div className="flex justify-center items-center">
            <Image
              src={MatDotLogo}
              alt="MatDot Logo"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="flex flex-col my-5 w-80">
            <Input
              label="아이디"
              name="id"
              register={register}
              placeholder="아이디 입력 해 주세요"
            />
          </div>
          <div className="flex flex-col my-5 w-80">
            <Input
              label="비밀번호"
              register={register}
              name="password"
              type="password"
              placeholder="비밀번호를 입력 해 주세요"
            />
          </div>
          <Btn label="로그인" className="w-[100%] pb-2" />
        </div>
        <SocialSignInBtn
          provider={"kakao"}
          onClick={() => handleSocialSignIn("kakao")}
        />
        <SocialSignInBtn
          provider={"naver"}
          onClick={() => handleSocialSignIn("naver")}
        />
      </form>
    </div>
  );
}
