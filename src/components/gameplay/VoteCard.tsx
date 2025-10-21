type VoteCardProps = {
  vote: string;
};

export default function VoteCard({ vote }: VoteCardProps) {
  return (
    <div className="z-10 bg-amber-600 w-1/2 h-1/3 absolute bottom-0 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
      {vote}
    </div>
  );
}
