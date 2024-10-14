import * as Type from "./util/interface";
import * as styled from "./style/defaultBtnStyle";

export default function DefaultBtn({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}: Type.CommonButtonProps) {
  styled.baseStyles, styled.sizeStyles, styled.variantStyles;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styled.baseStyles} ${styled.sizeStyles[size]} ${
        styled.variantStyles[variant]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {label}
    </button>
  );
}
