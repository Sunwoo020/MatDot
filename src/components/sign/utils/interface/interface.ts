import NaverLogo from "@assets/logo/NaverLogo.png";
import KakaoLogo from "@assets/logo/KakaoLogo.png";

export interface SocialSignInButtonProps {
  provider: "kakao" | "naver";
  onClick: () => void;
}

export const socialProviders = {
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
