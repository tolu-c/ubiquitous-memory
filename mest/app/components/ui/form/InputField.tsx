"use client";

import { useRef, useState } from "react";
import { InputProps } from "~/types/types";

export const InputField = ({
  name,
  type,
  onChange,
  label,
  required,
  icon,
  placeholder,
  minLength,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorText, setErrorText] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(true);

  const validateInput = (value: string): boolean => {
    if (type === "text") {
      if (required && value.trim() === "") {
        setErrorText(`${name} cannot be empty`);
        return false;
      }
      if (minLength && value.trim().length < minLength) {
        setErrorText(`${name} has to be at least ${minLength} characters`);
        return false;
      }
    }
    return true;
  };

  const handleChange = () => {
    const value = inputRef.current?.value || "";
    const isValid = validateInput(value);
    setIsInputValid(isValid);
    onChange(value, name);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        {label && <label htmlFor={name}>{label}</label>}
        {icon && icon.position === "left" && <span>{icon.src}</span>}
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={placeholder}
          minLength={minLength}
          ref={inputRef}
          onChange={handleChange}
        />
        {icon && icon.position === "left" && <span>{icon.src}</span>}
      </div>
      {!isInputValid && <p>{errorText}</p>}
    </div>
  );
};
