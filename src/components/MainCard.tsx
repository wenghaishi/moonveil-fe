'use client'

import Link from "next/link";
import {MainCardContent} from "@/enums";
import React from "react";
import CustomButton from "@/components/CustomButton";

type MainCardProps = {
  setCardContentAction: React.Dispatch<React.SetStateAction<MainCardContent>>;
};

export default function MainCard({setCardContentAction}: MainCardProps) {

  const handleClick =() => {
    setCardContentAction(MainCardContent.Login)
  }
  return (
    <>
      <div className={'title-font text-blue-950 font-bold text-2xl sm:text-5xl px-4 md:px-10'}>Welcome!</div>
      <div className={'title-font text-blue-950 text-xs sm:text-base md:text-xl px-4 md:px-10'}>Moonveil is a dark fantasy social game.
        When the moon rises, trust fades — and survival becomes a game of lies, deduction, and betrayal.
        <br />
        <br />
        Each night, the villagers sleep uneasily as hidden werewolves stalk among them.</div>
      <CustomButton onClick={handleClick} text={"Create Account"} />

      <Link href={'/docs'} className={'text-blue-950 title-font'}>Learn more</Link>
    </>
  )
}