import { ReactNode } from "react";

export type AuthType = "LOGIN" | "REGISTER";

export interface InputProps {
  name: string;
  type: "text" | "email" | "password";
  onChange: (value: string, name: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  icon?: {
    src: string;
    position: "left" | "right";
  };
  minLength?: number;
}

export interface FormData {
  [key: string]: string;
}

export interface Button {
  type: "button" | "submit";
  title: string;
  onClick?: () => void;
  color?: "";
  size?: "xs" | "sm" | "base" | "md" | "lg";
  borderRadius?: "flat" | "pill" | "round";
  icon?: {
    src: string;
    position: "left" | "right";
  };
}
