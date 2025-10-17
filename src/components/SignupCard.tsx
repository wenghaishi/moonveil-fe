"use client"

import {MainCardContent} from "@/enums";
import React from "react";

type SignupCardProps = {
  setCardContentAction: React.Dispatch<React.SetStateAction<MainCardContent>>;
}

export default function SignupCard({setCardContentAction}: SignupCardProps) {

  return (
    <>
      <form className="flex flex-col gap-4 text-left">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 rounded-lg border border-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button
          type="submit"
          className="bg-amber-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 transition mt-4"
        >
          Create account
        </button>
      </form>

    </>
  )
}