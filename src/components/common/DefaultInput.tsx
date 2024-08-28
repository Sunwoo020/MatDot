import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "url";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  className?: string;
  register?: UseFormRegister<FieldValues>;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  errorMessage,
  className = "",
  register,
  name,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
