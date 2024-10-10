// Authentication Context
import { ReactNode } from "react";
import { AxiosInstance } from "axios";

export interface user {
  email: string,
  name: string
}
export type AuthenticationContextType = {
  user: user|null
  handleLogout: () => void,
  api: AxiosInstance
};

export type AuthenticationProviderProps = {
  children: React.ReactNode;
};


//Context ResponsiveHome

export type ResponsiveHomeProviderProps = {
  children: ReactNode;
  handleEnableContact: () => void,
  handleDisableContact: () => void
};

export type ResponsiveHomeContextType = {
  handleEnableContact: () => void,
  handleDisableContact: () => void

};

// Badges

export type BadgeContextType = {
  activated: "Amigos"|"Grupos"|"Não lidas",
  setActivated: (value: "Amigos"|"Grupos"|"Não lidas") => void,
}

export interface propsBadgeProvider {
  children: ReactNode
}



// Contacts


export interface friend {
  email: string,
  name: string,
}

export interface group {
  id: string
  name: string,
}