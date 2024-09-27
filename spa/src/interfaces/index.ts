import { ReactNode } from "react"

//Login
export interface responseToken {
  data: {
    token: string
  }
}

export type InputsLogin = {
  email: string
  password: string
}

//Registration

enum ImageUserEnum {
  default = "default",
  male = "male",
  female = "female",
}

export type InputsRegistration = {
  name: string
  email: string
  password: string
  img: ImageUserEnum
}

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


// Message

export interface propsMessage {
  isFriend?: boolean
}

// Modal

export interface propsModal {
  isOpen: boolean,
  handleClose: () => void,
  children: ReactNode,
  title: string
}

// Badges

export type BadgeContextType = {
  activated: string,
  setActivated: (value: string) => void,
}

export interface propsBadgeProvider {
  children: ReactNode,
}

export interface propsBadge {
  children: string
}

// UserDropdown

export interface propsUserDropdown {
  friendModal: { handleOpen: () => void },
  groupModal: { handleOpen: () => void },
  profileModal: { handleOpen: () => void },
  logoutModal: { handleOpen: () => void },
}

