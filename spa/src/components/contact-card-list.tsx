import { useContext } from "react";
import { ContactCard } from "./contact-card";
import { ContactsContext } from "../contexts/contacts-context";
import { BadgeContext } from "../contexts/badge-context";

export function ContactCardList() {
  const { friends, groups } = useContext(ContactsContext)
  const { activated } = useContext(BadgeContext)

  function handleOpenContact() {
    console.log("Abrindo contato")
  }

  return (
    <div className="flex-grow h-max">

      {activated === "Grupos" && groups.map(group => (
        <ContactCard
          key={group.id}
          name={group.name}
          handleOpenContact={handleOpenContact} />
      ))}

      {activated !== "Grupos" && friends.map(friend => (
        <ContactCard
          key={friend.email}
          name={friend.name}
          handleOpenContact={handleOpenContact} />
      ))}
    </div>
  );
}