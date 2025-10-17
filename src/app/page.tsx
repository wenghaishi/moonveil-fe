import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <div className={'w-10/12 md:w-2/3 lg:w-1/2 max-w-[800px] bg-yellow h-auto rounded-4xl mt-10 flex flex-col items-center justify-center gap-6 p-8'}>
          <div className={'title-font text-blue-950 font-bold  text-4xl sm:text-6xl px-4 md:px-10'}>Welcome!</div>
          <div className={'title-font text-blue-950 md:text-xl px-4 md:px-10'}>Moonveil is a dark fantasy social game.
            When the moon rises, trust fades — and survival becomes a game of lies, deduction, and betrayal.
            <br />
            <br />

            Each night, the villagers sleep uneasily as hidden werewolves stalk among them.</div>
          <button className={'w-52 h-16 bg-[#D1831C] rounded-xl text-white text-xl font-bold cursor-pointer'}>
            Create account
          </button>
          <Link href={'/docs'} className={'text-blue-950'}>Learn more</Link>
        </div>
      </div>
    </div>
  );
}
