import { CheckCheck } from "lucide-react";
import { UserDefault } from "./user-deafult";
import { useContext } from "react";
import { ResponsiveHomeContext } from "../contexts/responsive-home-context";

export function ContactCard() {
  const { handleDisableContact } = useContext(ResponsiveHomeContext)

  function handleOpenContact() {
    handleDisableContact()
  }

  return (
    <div onClick={handleOpenContact} className="flex cursor-pointer">
      <div className="p-3">
        <UserDefault />
      </div>
      <div className="py-3 pr-4 gap-1 h-full flex-grow flex flex-wrap justify-between items-end border-t">
        <p>Nome</p>
        <p className="text-sm text-gray-500">19:50</p>
        <p className="w-full text-gray-500 flex items-center text-sm">
          <CheckCheck size={20} color="#60a5fa" />
          Olá, como foi seu dia?
        </p>
      </div>
    </div>
  );
}