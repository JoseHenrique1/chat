import { createContext } from 'react';
import { ResponsiveHomeContextType, ResponsiveHomeProviderProps } from '../interfaces/contexts';

export const ResponsiveHomeContext = createContext({} as ResponsiveHomeContextType);

export function ResponsiveHomeContextProvider({
  children,
  handleEnableContact,
  handleDisableContact,
  chatVisible,
  setChatVisible
}: ResponsiveHomeProviderProps) {

  return (
    <ResponsiveHomeContext.Provider
      value={{
        handleEnableContact,
        handleDisableContact,
        chatVisible,
        setChatVisible
      }}
    >
      {children}
    </ResponsiveHomeContext.Provider>
  );
};