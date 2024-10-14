"use client";
import {
  SocialSignInButtonProps,
  socialProviders,
} from "./interface/interface";

const SocialSignInButton: React.FC<SocialSignInButtonProps> = ({
  provider,
  onClick,
}) => {
  const { text, color, icon, fontColor } = socialProviders[provider];

  return (
    <div
      className="flex flex-col items-center justify-start w-full pb-2 h-12 rounded-xl mb-2"
      style={{ backgroundColor: color, color: fontColor }}
      onClick={onClick}
    >
      <img
        className="object-contain h-12 rounded-xl"
        src={icon.src}
        alt={text}
      />
    </div>
  );
};

export default SocialSignInButton;
