import { DropdownFilterProps } from "@/helpers/types/ui";
import React, { useState } from "react";



const Dropdown: React.FC<DropdownFilterProps> = ({ options, onchange, defaultOption, styling, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue || "");
    const [isValid, setIsValid] = useState(true);

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value);

        // Validation logic
        if (value === defaultValue) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        onchange(value);
    }
    return (
        <>
        <select
            className={`input ${styling} ${!isValid ? 'border-red-500' : ''}`} 
            value={selectedValue}
            onChange={handleOnChange}
        >
            <option value={defaultValue}>{defaultOption}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        {!isValid && <p className="text-red-500 mt-1">Please select a valid option.</p>}
    </>

    )
}

export default Dropdown
