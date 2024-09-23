import { MoreVertical, Search,  } from "lucide-react";
import { Header } from "./header";
import { UserDefault } from "./user-deafult";
import { MessageList } from "./message-list";
import { SearchBar } from "./search-bar";

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
      
      <SearchBar />
    </div>
   );
}
