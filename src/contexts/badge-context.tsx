import { createContext, useState } from "react";
import { ReactNode } from "react";

type BadgeContextType = {
  activated: string,
  setActivated: (value: string) => void,
}
export const BadgeContext = createContext({} as BadgeContextType)

interface props {
  children: ReactNode,
}

export function BadgeContextProvider({children}: props) {
  const [activated, setActivated] = useState("Tudo")

  return (
    <>
      <BadgeContext.Provider value={{ activated, setActivated }}>
        {children}
      </BadgeContext.Provider>
    </>
  );
}
