import { useContext, useEffect } from "react";
import { ContactCard } from "./contact-card";
import { ContactsContext } from "../contexts/contacts-context";
import { BadgeContext } from "../contexts/badge-context";

import { AxiosResponse } from 'axios';
import { AuthenticationContext } from '../contexts/authentication-context';
import { friend, group } from "../interfaces/contexts";
import { ResponsiveHomeContext } from "../contexts/responsive-home-context";

interface getFriends {
  friends: friend[]
}

interface getGroups {
  groups: group[]
}

export function ContactCardList() {
  const { api } = useContext(AuthenticationContext)
  const { friends, groups, setFriends, setGroups } = useContext(ContactsContext)
  const { activated } = useContext(BadgeContext)
  const { setChatVisible } = useContext(ResponsiveHomeContext)

  function handleOpenContact(contact: "friend" | "group") {
    return () => {
      console.log("Abrindo contato")
      setChatVisible(contact)
    }
  }

  async function getFriends() {
    const response: AxiosResponse<getFriends> = await api.get(`/friends`)
    const data = response.data
    setFriends(data.friends)
  }

  async function getGroups() {
    const response: AxiosResponse<getGroups> = await api.get(`/groups`)
    const data = response.data
    setGroups(data.groups)
  }

  useEffect(() => {
    getFriends()
    getGroups()
  }, [])

  return (
    <div className="flex-grow h-max">

      {activated === "Grupos" && groups.map(group => (
        <ContactCard
          key={group.id}
          name={group.name}
          handleOpenContact={handleOpenContact("group")} />
      ))}

      {activated !== "Grupos" && friends.map(friend => (
        <ContactCard
          key={friend.email}
          name={friend.name}
          handleOpenContact={handleOpenContact("friend")} />
      ))}
    </div>
  );
}