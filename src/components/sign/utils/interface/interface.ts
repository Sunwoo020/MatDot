import NaverLogo from "@assets/logo/NaverLogo.png";
import KakaoLogo from "@assets/logo/KakaoLogo.png";
import { StaticImageData } from "next/image";
export interface SocialSignInButtonProps {
  provider: SocialProvider;
  onClick: () => void;
}

export type SocialProvider = "kakao" | "naver";

interface SocialProviderDetails {
  text: string;
  color: string;
  icon: StaticImageData;
  fontColor: string;
}

export const socialProviders: Record<SocialProvider, SocialProviderDetails> = {
  kakao: {
    text: "Kakao 로그인",
    color: "#F7E317",
    icon: KakaoLogo,
    fontColor: "#000000",
  },
  naver: {
    text: "Naver 로그인",
    color: "#03C75A",
    icon: NaverLogo,
    fontColor: "#FFFFFF",
  },
} as const;
