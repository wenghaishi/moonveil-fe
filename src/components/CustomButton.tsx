import React from "react";
import {CustomButtonVariants} from "@/enums";

type CustomButtonProps = {
  variant?: CustomButtonVariants
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function CustomButton({variant = CustomButtonVariants.Solid, onClick, text}: CustomButtonProps) {

  // Ghost button variant
  if (variant === CustomButtonVariants.Ghost) {
    return (
      <button className={'title-font bg-transparent rounded-xl text-blue-950 md:text-lg font-bold cursor-pointer hover:underline'} onClick={onClick}>
        {text}
      </button>
    )
  }

  // Solid button variant
  if (variant === CustomButtonVariants.Solid) {
    return (
      <button className={'title-font w-auto h-10 px-6 md:h-12 bg-[#D1831C] rounded-xl text-white md:text-xl font-bold cursor-pointer'} onClick={onClick}>
        {text}
      </button>
    )
  }
}