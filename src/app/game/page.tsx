import Image from "next/image";
import MainGame from "@/components/gameplay/MainGame";

export default function GamePage() {
  return(
    <div className={'w-full h-screen flex'}>
      <Image
        src="/bg.png"
        alt="Background"
        fill
        priority
        className="object-cover object-top dark:invert"
      />
      <MainGame />
    </div>
  )
}