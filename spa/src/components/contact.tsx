import { UserDefault } from "./user-deafult";
import { Header } from "./header";
import { Search } from "./search";
import { ArchivedMsgs } from "./archived-messages";
import { ContactCardList } from "./contact-card-list";
import { Lock, MoreVertical } from "lucide-react";
import { BadgeList } from "./badge-list";
function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen lg:max-w-sm">
      <Header>
        <div>
          <UserDefault width={40} height={40} />
        </div>
        <MoreVertical size={20} color="#1f2937" className="cursor-pointer"/>
      </Header>
      <div className="px-4 py-2 flex flex-wrap gap-2 border-b border-gray-300">
        <Search />
        <BadgeList />
      </div>

      {/*ADCIONAR O OVERFLOW Y AQUI E USAR O CALC PARA O HEIGHT*/}
      <div className="flex-grow flex flex-col overflow-y-scroll contactList">
        <ArchivedMsgs />
        <ContactCardList />
        <div className="p-4">
          <p className="text-xs text-center">
            <Lock size={14} className="inline-flex mr-1" />
            Suas mensagens pessoais são protegidas com a
            <a href="#" className="text-blue-400"> criptografia de ponta a ponta</a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Contact;