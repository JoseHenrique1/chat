import { createContext, useState } from "react";
import { BadgeContextType, propsBadgeProvider } from "../interfaces/contexts";

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
