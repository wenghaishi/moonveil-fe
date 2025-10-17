"use client";

import {CustomButtonVariants, MainCardContent} from "@/enums";
import CustomButton from "@/components/CustomButton";
import React from "react";

type LoginCardProps = {
  setCardContentAction: React.Dispatch<React.SetStateAction<MainCardContent>>;
};

export default function LoginCard({ setCardContentAction }: LoginCardProps) {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: make API request to login
    // Example: axios.post("/api/login", { username, password });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 text-left w-full max-w-sm mx-auto items-center"
    >
      <div className={'text-blue-950 font-bold title-font text-2xl md:text-4xl sm:text-6xl'}>Login</div>

      <div className={'w-full px-4'}>
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
          className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none"
          required
        />
      </div>

      <div className={'w-full px-4 mb-6'}>
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
          className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none"
          required
        />
      </div>

      <CustomButton variant={CustomButtonVariants.Solid} onClick={handleLogin} text="Login" />
      <CustomButton variant={CustomButtonVariants.Ghost} onClick={handleLogin} text={"Forgot password?"} />
    </form>
  );
}
