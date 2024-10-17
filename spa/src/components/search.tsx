import { MoveLeft, SearchIcon } from "lucide-react";

export function Search() {
  return ( 
    <div className="w-full flex flex-row-reverse justify-end items-center gap-8 bg-primary px-4 py-1 rounded-lg">
      <input 
      type="text" 
      placeholder="Pesquisar"
      className="peer placeholder:text-secondary placeholder:text-sm bg-transparent focus:outline-none" />

      <div className="flex peer-focus:hidden">
        <SearchIcon className="text-secondary" size={18}/>
      </div>

      <div className="hidden peer-focus:flex">
        <MoveLeft size={18} className="text-special"/>
      </div> 

    </div>
   );
}