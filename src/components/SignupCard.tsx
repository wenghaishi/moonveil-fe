"use client";

import React, { useState } from "react";
import { CustomButtonVariants, MainCardContent } from "@/enums";
import CustomButton from "@/components/CustomButton";

type SignupCardProps = {
  setCardContentAction: React.Dispatch<React.SetStateAction<MainCardContent>>;
};

export default function SignupCard({ setCardContentAction }: SignupCardProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password)
      newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ Passed validation — perform signup logic here
    console.log("Signup data:", formData);
  };

  const changeToLogin = () => setCardContentAction(MainCardContent.Login);

  return (
    <form
      onSubmit={handleSignup}
      className="
        flex flex-col gap-[2px] md:gap-1 text-left
        w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto items-center
      "
    >
      {/* Title */}
      <div
        className="
          text-blue-950 font-bold title-font
          text-2xl sm:text-3xl md:text-4xl
          mb-1 sm:mb-2
        "
      >
        Sign Up
      </div>

      {/* Username */}
      <div className="w-full px-2 sm:px-3 md:px-4">
        <label
          htmlFor="username"
          className="
            block mb-0.5 sm:mb-1 font-semibold text-gray-700 title-font
            text-xs sm:text-sm md:text-base
          "
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="
            w-full rounded-lg border border-navy focus:outline-none
            px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2
            text-xs sm:text-sm
          "
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-0.5">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div className="w-full px-2 sm:px-3 md:px-4">
        <label
          htmlFor="email"
          className="
            block mb-0.5 sm:mb-1 font-semibold text-gray-700 title-font
            text-xs sm:text-sm md:text-base
          "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full rounded-lg border border-navy focus:outline-none
            px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2
            text-xs sm:text-sm
          "
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="w-full px-2 sm:px-3 md:px-4">
        <label
          htmlFor="password"
          className="
            block mb-0.5 sm:mb-1 font-semibold text-gray-700 title-font
            text-xs sm:text-sm md:text-base
          "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="
            w-full rounded-lg border border-navy focus:outline-none
            px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2
            text-xs sm:text-sm
          "
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="w-full px-2 sm:px-3 md:px-4 mb-2 sm:mb-3 md:mb-4">
        <label
          htmlFor="confirmPassword"
          className="
            block mb-0.5 sm:mb-1 font-semibold text-gray-700 title-font
            text-xs sm:text-sm md:text-base
          "
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="
            w-full rounded-lg border border-navy focus:outline-none
            px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2
            text-xs sm:text-sm
          "
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 items-center w-full">
        <CustomButton
          variant={CustomButtonVariants.Solid}
          onClick={handleSignup}
          text="Sign up"
        />
        <CustomButton
          variant={CustomButtonVariants.Ghost}
          onClick={changeToLogin}
          text="Already have an account? Log in"
        />
      </div>
    </form>
  );
}
