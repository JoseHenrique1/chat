import { createContext} from 'react';
import { ResponsiveHomeContextType, ResponsiveHomeProviderProps } from '../interfaces/contexts';

export const ResponsiveHomeContext = createContext({} as ResponsiveHomeContextType);

export function ResponsiveHomeContextProvider({
  children,
  handleEnableContact,
  handleDisableContact
}: ResponsiveHomeProviderProps) {

  return (
    <ResponsiveHomeContext.Provider
      value={{
        handleEnableContact,
        handleDisableContact
      }}
    >
      {children}
    </ResponsiveHomeContext.Provider>
  );
};