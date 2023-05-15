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
    if (required && value.trim() === "") {
      setErrorText(`${name} cannot be empty`);
      return false;
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid: boolean = emailRegex.test(value);
      if (!isEmailValid) {
        setErrorText("Please enter a valid email address");
        return false;
      } else {
        return true;
      }
    }

    if (type === "text" || type === "password") {
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
      <div className="flex flex-col gap-2 relative">
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-800">
            {label}
          </label>
        )}
        {icon && (
          <span className="absolute bottom-3 left-1.5 text-gray-800">
            {icon.src}
          </span>
        )}
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={placeholder}
          minLength={minLength}
          ref={inputRef}
          onChange={handleChange}
          className={`${
            icon ? "pl-7" : "px-2"
          } text-slate-600 font-medium text-base placeholder:text-slate-500 placeholder:text-sm border border-slate-600 focus:outline-none focus:border-slate-900 focus:ring-slate-900 focus:ring-1 focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:invalid:text-red-600`}
        />
      </div>
      {!isInputValid && (
        <p className="text-xss text-red-500 font-medium">{errorText}</p>
      )}
    </div>
  );
};
