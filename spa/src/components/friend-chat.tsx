import { Search,  } from "lucide-react";
import { Header } from "./common/header";
import { UserDefault } from "./common/user-deafult";
import { MessageList } from "./message-list";
import { SearchBar } from "./search-bar";
import { FriendActions } from "./friend-actions";
import { useContext } from "react";
import { ContactsContext } from "../contexts/contacts-context";

export function FriendChat() {
  const {friendSelected} = useContext(ContactsContext)
  return ( 
    <div className="flex-grow flex flex-col h-screen">
      <Header>
        <div className="flex items-center gap-4">
          <UserDefault width={40} height={40}/>
          <div className="flex-grow h-full flex flex-col">
            <h1 className="text-quaternary">{friendSelected?.name}</h1>
            <p className="text-xs text-secondary">Clique para mostrar dados do usuário</p>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <Search size={20} className="cursor-pointer text-quaternary"/>
          <FriendActions />
        </div>
      </Header>

      <MessageList />
      
      <SearchBar />
    </div>
   );
}
