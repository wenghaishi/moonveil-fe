export default function MainGame() {

  const PLAYERS = [
    {"id": "1", "gender":"male"},
    {"id": "2", "gender":"male"},
    {"id": "3", "gender":"female"},
    {"id": "4", "gender":"female"},
    {"id": "5", "gender":"female"},
    {"id": "6", "gender":"female"},
    {"id": "7", "gender":"female"},
    {"id": "8", "gender":"female"},
    {"id": "9", "gender":"female"},
  ]
  return (
    <div className={'flex flex-col w-full h-full'}>
      <div className={'grid grid-cols-3 gap-2 z-10 h-full w-full'}>
        {PLAYERS.map(p =>
          <AvatarCard player={p} key={p.id}/>
        )}
      </div>
      <Chat />
    </div>

)
}
import AvatarCard from "@/components/gameplay/AvatarCard";

import Chat from "@/components/gameplay/Chat";
