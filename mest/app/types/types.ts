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
    src: ReactNode;
  };
  minLength?: number;
}

export interface FormData {
  [key: string]: string;
}
export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps {
  type: "button" | "submit";
  title: string;
  onClick?: () => void;
  color?: "cta" | "primary" | "secondary";
  size?: Sizes;
  borderRadius?: Sizes;
  icon?: {
    src: ReactNode;
    position: "left" | "right";
    // color?: "primary" | "secondary" | "base";
  };
  variant?: "fill" | "outline" | "default" | "light";
  compact?: boolean;
  disabled?: boolean;
}

export interface AuthSocialButtonProps {
  icon: ReactNode;
  onClick: () => void;
}
