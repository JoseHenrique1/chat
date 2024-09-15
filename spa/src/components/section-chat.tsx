import { Mic, MoreVertical, Plus, Search, Smile } from "lucide-react";
import { Header } from "./header";
import { UserDefault } from "./user-deafult";
import { MessageList } from "./message-list";

export function SectionChat() {
  return ( 
    <div className="flex-grow flex flex-col h-screen">
      <Header>
        <div className="flex items-center gap-4">
          <UserDefault width={40} height={40}/>
          <div className="flex-grow h-full flex flex-col">
            <h1 >Nome</h1>
            <p className="text-xs text-gray-600">Clique para mostrar dados do usuário</p>
          </div>
        </div>

        <div className="flex gap-8">
          <Search size={20} color="#1f2937" className="cursor-pointer"/>
          <MoreVertical size={20} color="#1f2937" className="cursor-pointer"/>
        </div>
      </Header>

      <MessageList />
      
      <div className="bg-primary h-14 flex items-center gap-4 px-4 py-2">
        <Smile color="#1f2937"  className="cursor-pointer"/>
        <Plus color="#1f2937" className="cursor-pointer"/>
        <input 
          type="text" 
          placeholder="Digite uma mensagem"
          className="flex-grow rounded bg-white text-gray-800 h-full px-4 text-sm focus:outline-none"
        />
        <Mic color="#1f2937" className="cursor-pointer"/>
      </div>


    </div>
   );
}
