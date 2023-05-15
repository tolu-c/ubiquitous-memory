"use client";

import { FormEvent, useCallback, useState } from "react";
import { AuthType, FormData } from "~/types/types";
import { InputField } from "./ui/form/InputField";
import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Button } from "./ui/form/Button";
import { AuthSocialButton } from "./ui/AuthSocialButton";
import { GitHub } from "./svg/Github";
import { Google } from "./svg/Google";

export const AuthForm = () => {
  const [authType, setAuthType] = useState<AuthType>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormData>({});

  const toggleAuthType = useCallback(() => {
    if (authType === "LOGIN") {
      setAuthType("REGISTER");
    } else {
      setAuthType("LOGIN");
    }
  }, [authType]);

  const handleSubmit = (formData: FormData) => {
    setIsLoading(true);
    if (authType === "REGISTER") {
      // register function
    } else if (authType === "LOGIN") {
      // login function
    }
    console.log({ formData });
  };

  const handleInputChange = (value: string, name: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  const socialActions = (action: string) => {
    setIsLoading(true);
    // next auth actions stuffs
  };

  return (
    <div className="mt-8 mx-auto w-full max-w-md">
      <div className="bg-white px-4 py-8 shadow rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={onSubmit}>
          {authType === "REGISTER" && (
            <InputField
              type="text"
              label="Username"
              name="username"
              placeholder="Username"
              minLength={3}
              onChange={handleInputChange}
              icon={{
                src: <UserIcon className="w-4 h-4" />,
              }}
              required
            />
          )}

          <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            icon={{
              src: <EnvelopeIcon className="w-4 h-4" />,
            }}
            required
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="password"
            minLength={8}
            onChange={handleInputChange}
            icon={{
              src: <LockClosedIcon className="w-4 h-4" />,
            }}
            required
          />
          <Button
            title={authType === "REGISTER" ? "Register" : "Login"}
            type="submit"
            borderRadius="sm"
            color="cta"
            size="lg"
            icon={{
              position: "right",
              src: <ArrowRightOnRectangleIcon className="w-6 h-6" />,
            }}
            disabled={isLoading}
          />
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={<GitHub />}
              onClick={() => {
                socialActions("github");
              }}
            />
            <AuthSocialButton
              icon={<Google />}
              onClick={() => {
                socialActions("google");
              }}
            />
          </div>

          <div className="flex gap-2 justify-center text-sm mt-6 text-gray-500">
            <div>
              {authType === "LOGIN"
                ? "New to Messenger?"
                : "Already have an account?"}
            </div>
            <p className="underline cursor-pointer" onClick={toggleAuthType}>
              {authType === "LOGIN" ? "Create an account" : "Login"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
