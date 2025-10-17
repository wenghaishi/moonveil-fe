import Image from "next/image";

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
        <h1 className="text-5xl md:text-9xl font-bold title-font title-font-color stroke-text font-bold">Moonveil</h1>
        <div className={'w-1/2 bg-yellow h-1/2 rounded-4xl mt-10 flex flex-col items-center justify-center gap-6 p-4'}>
          <div className={'title-font text-blue-950 font-bold text-6xl'}>Welcome!</div>
          <div className={'title-font text-blue-950 text-xl px-16'}>Moonveil is a dark fantasy village shrouded in mist and secrets.
            When the moon rises, trust fades — and survival becomes a game of lies, deduction, and betrayal.
            Each night, the villagers sleep uneasily as hidden werewolves stalk among them.</div>
          <button className={'w-52 h-16 bg-[#D1831C] rounded-xl text-white text-xl font-bold'}>
            Create account
          </button>
        </div>
      </div>

      {/*<div className="h-[500px] w-full bottom-0 fixed z-10">*/}
      {/*  <Image*/}
      {/*    src="/houses.png"*/}
      {/*    alt="Wolf howling at the moon"*/}
      {/*    fill*/}
      {/*    className="object-cover object-top"*/}
      {/*    priority*/}
      {/*  />*/}
      {/*</div>*/}

    </div>
  );
}
