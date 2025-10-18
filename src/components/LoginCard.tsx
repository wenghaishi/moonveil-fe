"use client";

import React, { useState } from "react";
import { CustomButtonVariants, MainCardContent } from "@/enums";
import CustomButton from "@/components/CustomButton";

type LoginCardProps = {
  setCardContentAction: React.Dispatch<React.SetStateAction<MainCardContent>>;
};

export default function LoginCard({ setCardContentAction }: LoginCardProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error as user types
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim())
      newErrors.username = "Username is required.";

    if (!formData.password)
      newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ Passed validation — perform login logic here
    console.log("Login data:", formData);
  };

  const changeToSignup = () => {
    setCardContentAction(MainCardContent.Signup);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col md:gap-4 text-left w-full max-w-sm mx-auto items-center"
    >
      {/* Title */}
      <div className="text-blue-950 font-bold title-font md:text-6xl sm:text-4xl mb-2">
        Login
      </div>

      {/* Username */}
      <div className="w-full px-4">
        <label
          htmlFor="username"
          className="block mb-1 font-semibold text-gray-700 title-font"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
        )}
      </div>

      {/* Password */}
      <div className="w-full px-4 mb-4">
        <label
          htmlFor="password"
          className="block mb-1 font-semibold text-gray-700 title-font"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      {/* Buttons */}
      <CustomButton
        variant={CustomButtonVariants.Solid}
        onClick={handleLogin}
        text="Login"
      />
      <CustomButton
        variant={CustomButtonVariants.Ghost}
        onClick={changeToSignup}
        text="Sign up"
      />
      <CustomButton
        variant={CustomButtonVariants.Ghost}
        onClick={() => console.log("Forgot password clicked")}
        text="Forgot password?"
      />
    </form>
  );
}
