import { InputProps } from "@/helpers/types/ui";
import React, { useState } from "react";

const Input: React.FC<InputProps> = ({ placeholder, onChange, styling }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        className={` input ${styling}`}
      />
    </>
  );
};

export default Input;
