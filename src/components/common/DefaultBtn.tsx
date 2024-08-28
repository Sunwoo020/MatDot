interface CommonButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

export default function DefaultBtn({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}: CommonButtonProps) {
  const baseStyles =
    "m-2 inline-flex items-center justify-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  const variantStyles = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
}
