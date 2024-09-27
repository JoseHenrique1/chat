import { createContext, useState } from "react";
import { BadgeContextType } from "../interfaces";
import { propsBadgeProvider } from "../interfaces";

export const BadgeContext = createContext({} as BadgeContextType)

export function BadgeContextProvider({children}: propsBadgeProvider) {
  const [activated, setActivated] = useState("Tudo")

  return (
    <>
      <BadgeContext.Provider value={{ activated, setActivated }}>
        {children}
      </BadgeContext.Provider>
    </>
  );
}
