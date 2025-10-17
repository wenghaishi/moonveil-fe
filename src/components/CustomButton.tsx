type CustomButtonProps = {
  onClick: () => void;
  text: string;
}
export default function CustomButton({onClick, text}: CustomButtonProps) {
  return (
    <button className={'w-52 h-14 bg-[#D1831C] rounded-xl text-white text-xl font-bold cursor-pointer'} onClick={onClick}>
      {text}
    </button>
  )
}