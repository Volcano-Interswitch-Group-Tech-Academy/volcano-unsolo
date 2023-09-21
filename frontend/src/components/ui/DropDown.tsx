import { DropdownFilterProps } from "@/helpers/types/ui";
import React, { useState } from "react";
import index from './../../pages/dashboard/index';

const Dropdown: React.FC<DropdownFilterProps> = ({
  options,
  onchange,
  defaultOption,
  styling,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const [isValid, setIsValid] = useState(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    if (value === defaultValue) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    onchange(value);
  };
  return (
    <>
      <select
        className={`input ${styling} ${!isValid ? "border-red-500" : ""}`}
        value={selectedValue}
        onChange={handleOnChange}
      >
        <option className="light-font" value={defaultValue}>{defaultOption}</option>
        {options.map((option, index) => (
          <option key={option.value} value={option.value} className={`option-${index}`}>
            {option.label}
          </option>
        ))}
      </select>
      {!isValid && (
        <span className="text-red-500 error mt-3">
          Please select a valid option.
        </span>
      )}
    </>
  );
};

export default Dropdown;
