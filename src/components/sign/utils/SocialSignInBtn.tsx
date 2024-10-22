"use client";
import {
  socialProviders,
  SocialSignInButtonProps,
} from "./interface/interface";

export const SocialSignInBtn = ({
  provider,
  onClick,
}: SocialSignInButtonProps) => {
  const { text, color, icon, fontColor } = socialProviders[provider];

  return (
    <button
      style={{ backgroundColor: color, color: fontColor }}
      onClick={onClick}
      className="flex items-center p-2 rounded-md w-full mb-2"
    >
      <img src={icon.src} alt={`${provider} logo`} className="w-6 h-6 mr-2" />
      {text}
    </button>
  );
};
