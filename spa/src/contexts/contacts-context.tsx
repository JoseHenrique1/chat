import { createContext, useState, Dispatch } from 'react';
import { friend, group } from '../interfaces/contexts';

type ContactsContextType = {
  friends: friend[],
  groups: group[],
  setFriends: Dispatch<React.SetStateAction<friend[]>>
  setGroups: Dispatch<React.SetStateAction<group[]>>
  friendSelected:  friend | null,
  setFriendSelected: Dispatch<React.SetStateAction<friend | null>>,
  groupSelected:  group | null,
  setGroupSelected: Dispatch<React.SetStateAction<group | null>>
};

type ContactsProviderProps = {
  children: React.ReactNode;
};



export const ContactsContext = createContext({} as ContactsContextType);

export function ContactsProvider({ children }: ContactsProviderProps) {
  const [friends, setFriends] = useState<friend[]>([])
  const [groups, setGroups] = useState<group[]>([])

  const [friendSelected, setFriendSelected] = useState<friend | null>(null)
  const [groupSelected, setGroupSelected] = useState<group | null>(null)


  return (
    <ContactsContext.Provider
      value={{
        friends,
        groups,
        setFriends,
        setGroups,
        friendSelected,
        setFriendSelected,
        groupSelected,
        setGroupSelected
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};