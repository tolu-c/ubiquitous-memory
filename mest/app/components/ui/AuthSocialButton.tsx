"use client";

import { FC } from "react";
import { AuthSocialButtonProps } from "~/types/types";

export const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon,
  onClick,
}) => {
  return (
    <span
      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text0gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer focus:outline-offset-0"
      onClick={onClick}
    >
      {icon}
    </span>
  );
};
