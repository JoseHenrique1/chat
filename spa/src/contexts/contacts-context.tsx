import { createContext, useState } from 'react';


const friendsFake = [
  {
    email: "jose@gmail.com",
    name: "jose"
  },
  {
    email: "maria@gmail.com",
    name: "maria"
  },
  {
    email: "ana@gmail.com",
    name: "ana"
  }
]

const groupsFake = [
  {
    id: "111",
    name: "Estudos"
  },
  {
    id: "222",
    name: "Matemática"
  },
  {
    id: "333",
    name: "Futebol"
  }
]

interface friend {
  email: string,
  name: string,
}

interface group {
  id: string
  name: string,
}

type ContactsContextType = {
  friends: friend[],
  groups: group[]


};

type ContactsProviderProps = {
  children: React.ReactNode;
};



export const ContactsContext = createContext({} as ContactsContextType);

export function ContactsProvider({ children }: ContactsProviderProps) {
  const [friends, setFriends] = useState(friendsFake)
  const [groups, setgroups] = useState(groupsFake)

  return (
    <ContactsContext.Provider
      value={{
        friends,
        groups
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};