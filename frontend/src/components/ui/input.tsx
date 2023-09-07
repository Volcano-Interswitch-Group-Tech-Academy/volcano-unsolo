import { InputProps } from "@/helpers/types/ui";
import React from "react";

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  styling,
  type,
  onBlur,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`input ${styling}`}
      />

      {error && <span className="text-red-500 error mt-3">{error}</span>}
    </div>
  );
};

export default Input;
