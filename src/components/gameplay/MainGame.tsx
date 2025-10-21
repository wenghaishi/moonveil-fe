import AvatarCard from "@/components/gameplay/AvatarCard";
import Chat from "@/components/gameplay/Chat";

export default function MainGame() {

  const PLAYERS = [
    {"id": "1", "gender":"male", "username": "abc", "message": "hi how are you"},
    {"id": "2", "gender":"male", "username": "abc", "message": "5 is werewolf guys, vote him today please"},
    {"id": "3", "gender":"female", "username": "abc"},
    {"id": "4", "gender":"female", "username": "abc"},
    {"id": "5", "gender":"female", "username": "abc"},
    {"id": "6", "gender":"female", "username": "abc", "message": "5 is werewolf guys, vote him today please. This is the last chance we have to win this game."},
    {"id": "7", "gender":"female", "username": "abc", "message": "5 is werewolf"},
    {"id": "8", "gender":"female", "username": "abc"},
    {"id": "9", "gender":"female", "username": "abc"},
  ]
  return (
    <div className={'flex flex-col w-full h-full p-2'}>
      <div className={'grid grid-cols-3 gap-1 z-10 h-full w-full'}>
        {PLAYERS.map(p =>
          <AvatarCard player={p} key={p.id}/>
        )}
      </div>
      <Chat />
    </div>

  )
}
