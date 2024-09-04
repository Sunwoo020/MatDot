"use client";
import Btn from "@components/common/DefaultBtn";
import React from "react";
import { useSession } from "next-auth/react";

interface AuthButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

export default function AuthButton({
  label,
  onClick,
  type = "submit",
  variant = "primary",
  size = "small",
}: AuthButtonProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Btn
        label="Loading..."
        onClick={() => {}}
        type="button"
        variant="secondary"
        size="small"
        disabled
      />
    );
  }
  return (
    <Btn
      label={label}
      onClick={onClick}
      type={type}
      variant={variant}
      size={size}
    />
  );
}
