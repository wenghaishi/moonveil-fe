"use client"

import Image from "next/image";
import MainCard from "@/components/MainCard";
import {MainCardContent} from "@/enums";
import {useState} from "react";
import LoginCard from "@/components/LoginCard";
import SignupCard from "@/components/SignupCard";

export default function Home() {

  const [cardContent, setCardContent] = useState<MainCardContent>(MainCardContent.Main)

  // Helper to render based on enum state
  const renderCard = () => {
    switch (cardContent) {
      case MainCardContent.Main:
        return <MainCard setCardContentAction={setCardContent} />;
      case MainCardContent.Login:
        return <LoginCard setCardContentAction={setCardContent} />;
      case MainCardContent.Signup:
        return <SignupCard setCardContentAction={setCardContent} />;
      default:
        return null;
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen font-sans overflow-hidden">
      <Image
        src="/bg.png"
        alt="Background"
        fill
        priority
        className="object-cover object-top dark:invert"
      />

      <div className="relative h-[30vh] sm:h-[35vh] md:h-[45vh] w-full z-10">
        <Image
          src="/wolfmoon.png"
          alt="Wolf howling at the moon"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Your page content goes here */}
      <div className="relative z-10 flex items-center justify-center h-full w-full flex-col mt-[-400px] sm:mt-[-370px] md:mt-[-320px]">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold title-font title-font-color stroke-text" >Moonveil</h1>

        <div className="relative w-[320px] h-[340px] sm:w-[420px] sm:h-[450px] md:w-[500px] md:h-[550px]">
          <Image
            src="/scroll.png"
            alt="scroll"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 sm:px-10 w-full">
            {renderCard()}
          </div>
        </div>
      </div>
    </div>
  );
}
