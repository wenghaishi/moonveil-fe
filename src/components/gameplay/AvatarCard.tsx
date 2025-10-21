import Image from "next/image";
import VoteVard from "@/components/gameplay/VoteCard";

type AvatarCardProps = {
  player: {
    id: string;
    gender: string;
    message?: string,
    username?: string,
  };
};

export default function AvatarCard({ player }: AvatarCardProps) {
  const avatarSrc = player.gender === "male" ? "/male.png" : "/female.png";

  return (
    <div className="w-full h-full rounded-xl border border-amber-600 overflow-hidden">
      <div className="h-1/2 flex items-center justify-center relative px-2">
        {player.message ? (
          <div className="relative max-w-[90%] px-3 py-1 text-sm bg-amber-100 text-blue-950 rounded-lg shadow-md h-[48px] flex items-center justify-center">
            {player.message}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-amber-100" />
          </div>
        ) : (
          <div className="relative h-[48px]">
          </div>
        )}
      </div>

      <div className={'h-1/2 w-full relative items-center justify-center flex mt-auto'}>
        <Image
          src={avatarSrc}
          alt={`${player.gender} avatar`}
          fill
          className="object-contain bottom-0"
        />
        <VoteVard vote={"5"}/>
      </div>

    </div>
  );
}
