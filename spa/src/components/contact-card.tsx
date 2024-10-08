import { UserDefault } from "./common/user-deafult";
import { useContext } from "react";
import { ResponsiveHomeContext } from "../contexts/responsive-home-context";

interface propsContactCard {
  name:string
  handleOpenContact: ()=>void
}

export function ContactCard({name, handleOpenContact : openContact }: propsContactCard) {
  const { handleDisableContact } = useContext(ResponsiveHomeContext)

  function handleOpenContact() {
    handleDisableContact() // desabilitando a tela de apresentação caso esteja em um pc
    openContact()
  }

  return (
    <div onClick={handleOpenContact} className="flex cursor-pointer first:group">
      <div className="p-3">
        <UserDefault />
      </div>
      <div className="py-3 pr-4 gap-1 h-full flex-grow flex flex-wrap justify-between items-end border-t border-quinternary group-hover:bg-black">
        <p className="text-quaternary">{name}</p>
        <p className="text-sm text-secondary">19:50</p>
        <p className="w-full text-secondary flex items-center text-sm">
          Olá, como foi seu dia?
        </p>
      </div>
    </div>
  );
}