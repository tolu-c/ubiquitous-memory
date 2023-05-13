"use client";

import { FormEvent, useCallback, useState } from "react";
import { AuthType, FormData } from "~/types/types";
import { InputField } from "./ui/form/InputField";

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
          <InputField
            type="text"
            label="Username"
            name="username"
            placeholder="Username"
            minLength={3}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};
