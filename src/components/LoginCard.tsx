"use client";

import React, { useState } from "react";
import { CustomButtonVariants, MainCardContent } from "@/enums";
import CustomButton from "@/components/CustomButton";

type LoginCardProps = {
  setCardContentAction: React.Dispatch<React.SetStateAction<MainCardContent>>;
};

export default function LoginCard({ setCardContentAction }: LoginCardProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error as user types
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // ✅ Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // ✅ Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ Passed validation — perform login logic here
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      console.log("Response:", data);
    } catch (err){
      console.error("Login error:", err);
    }
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

      {/* Email */}
      <div className="w-full px-4">
        <label
          htmlFor="email"
          className="block mb-1 font-semibold text-gray-700 title-font"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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
