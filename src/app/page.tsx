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

      <div className="relative h-[30vh] w-full z-10">
        <Image
          src="/wolfmoon.png"
          alt="Wolf howling at the moon"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Your page content goes here */}
      <div className="relative z-10 flex items-center justify-center h-full w-full flex-col mt-[-350px]">
        <h1 className="text-7xl sm:text-9xl font-bold title-font title-font-color stroke-text" >Moonveil</h1>
        <div className={'w-10/12 md:w-2/3 lg:w-1/2 max-w-[800px] bg-yellow h-1/2 rounded-4xl mt-10 flex flex-col items-center justify-center gap-6 p-8'}>
          {renderCard()}
        </div>
      </div>
    </div>
  );
}
