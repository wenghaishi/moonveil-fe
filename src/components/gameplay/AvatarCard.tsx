import Image from "next/image";

type AvatarCardProps = {
  player: {
    id: string;
    gender: string;
  };
};

export default function AvatarCard({ player }: AvatarCardProps) {
  const avatarSrc = player.gender === "male" ? "/male.png" : "/female.png";

  return (
    <div className="w-full h-full rounded-xl border border-amber-600 overflow-hidden">
      <div className={'h-1/2'}></div>

      <div className={'h-1/2 w-full relative'}>

        <Image
          src={avatarSrc}
          alt={`${player.gender} avatar`}
          fill
          className="object-contain bottom-0"
        />
      </div>

    </div>
  );
}
