"use client";
import { socialProviders, SocialSignInButtonProps } from "./interface";

export const SocialSignInBtn = ({
  provider,
  onClick,
}: SocialSignInButtonProps) => {
  const { text, color, icon, fontColor } = socialProviders[provider];

  return (
    <button
      style={{ backgroundColor: color, color: fontColor }}
      onClick={onClick}
      className="flex flex-row items-center rounded-md w-3/5 mb-2"
    >
      <img src={icon.src} alt={`${provider} logo`} className="w-full" />
    </button>
  );
};
