"use client";
import { signIn } from "next-auth/react";
import { FieldValues, useForm } from "react-hook-form";
import { SocialSignInBtn } from "../utils/SocialSignInBtn";
import Input from "@components/common/DefaultInput";
import Btn from "@components/common/DefaultBtn";

export default function SigninForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const result = await signIn("credentials", {
      username: data.id,
      password: data.password,
      redirect: true,
      callbackUrl: "basedUrl",
    });
  };

  const handleKakaoSignIn = async () => {
    await signIn("kakao", { redirect: false, callbackUrl: "/" });
  };

  const handleNaverSignIn = async () => {
    await signIn("naver", { redirect: true, callbackUrl: "/" });
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-full w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-center h-full pb-2">
        <label className="pl-2px pb-1">MatDot Login </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <Input
              label="아이디"
              name="id"
              register={register}
              placeholder="아이디 입력 해 주세요"
            />
          </div>
        </div>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <Input
              label="비밀번호"
              register={register}
              name="password"
              type="password"
              placeholder="비밀번호를 입력 해 주세요"
            />
          </div>
        </div>
        <Btn label="로그인" className="w-[100%] pb-2" />
      </div>
      <SocialSignInBtn provider={"kakao"} onClick={handleKakaoSignIn} />
      <SocialSignInBtn provider={"naver"} onClick={handleNaverSignIn} />
    </form>
  );
}
