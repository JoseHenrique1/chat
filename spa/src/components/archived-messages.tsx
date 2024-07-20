import { SquareArrowDown } from "lucide-react";

export function ArchivedMsgs() {
  function handleOpenMessages() {
    alert("Abrindo mensagens arquivadas")
    
  }
  return ( 
    <div onClick={handleOpenMessages} className="inline-flex p-3 space-x-4 cursor-pointer">
      <div className="px-3">
        <SquareArrowDown color="#16a34a" size={22}/>
      </div>
      <div className="text-gray-800">
        Arquivadas
      </div>
    </div>
   );
}
