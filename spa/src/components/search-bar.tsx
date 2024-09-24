import { Undo2, SendHorizonal } from "lucide-react";
import { useContext } from "react";
import { ResponsiveHomeContext } from "../contexts/responsive-home-context";


export function SearchBar() {
  const {handleEnableContact} = useContext(ResponsiveHomeContext)
  return (
    <div className="bg-primary h-14 flex items-center gap-4 px-4 py-2">
      <Undo2 onClick={handleEnableContact} color="#1f2937" className="cursor-pointer md:hidden" />
      <input
        type="text"
        placeholder="Digite uma mensagem"
        className="flex-grow rounded bg-white text-gray-800 h-full px-4 text-sm focus:outline-none"
      />
      <SendHorizonal color="#1f2937" className="cursor-pointer" />
    </div>
  );
}


  