import { Search,  } from "lucide-react";
import { Header } from "./common/header";
import { UserDefault } from "./common/user-deafult";
import { MessageList } from "./message-list";
import { SearchBar } from "./search-bar";
import { GroupActions } from "./group-actions";

export function GroupChat() {
  return ( 
    <div className="flex-grow flex flex-col h-screen">
      <Header>
        <div className="flex items-center gap-4">
          <UserDefault width={40} height={40}/>
          <div className="flex-grow h-full flex flex-col">
            <h1 className="text-quaternary">Grupo 01</h1>
            <p className="text-xs text-secondary">Clique para mostrar dados do usuário</p>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <Search size={20} className="cursor-pointer text-quaternary"/>
          <GroupActions />
        </div>
      </Header>

      <MessageList />
      
      <SearchBar />
    </div>
   );
}
