import { MoveLeft, SearchIcon } from "lucide-react";

export function Search() {
  return ( 
    <div className="w-full flex flex-row-reverse justify-end items-center gap-8 bg-primary px-4 py-1 rounded-lg">
      <input 
      type="text" 
      placeholder="Pesquisar"
      className="peer placeholder:text-gray-500 placeholder:text-sm bg-transparent focus:outline-none" />

      <div className="flex peer-focus:hidden">
        <SearchIcon color="#6b7280" size={18}/>
      </div>

      <div className="hidden peer-focus:flex">
        <MoveLeft color="#16a34a" size={18}/>
      </div> 

    </div>
   );
}