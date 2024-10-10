import { createContext, useState, Dispatch } from 'react';
import { friend, group } from '../interfaces/contexts';

type ContactsContextType = {
  friends: friend[],
  groups: group[],
  setFriends: Dispatch<React.SetStateAction<friend[]>>
  setGroups: Dispatch<React.SetStateAction<group[]>>
};

type ContactsProviderProps = {
  children: React.ReactNode;
};



export const ContactsContext = createContext({} as ContactsContextType);

export function ContactsProvider({ children }: ContactsProviderProps) {
  const [friends, setFriends] = useState<friend[]>([])
  const [groups, setGroups] = useState<group[]>([])


  return (
    <ContactsContext.Provider
      value={{
        friends,
        groups,
        setFriends,
        setGroups
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};