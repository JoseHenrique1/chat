import { ReactNode, InputHTMLAttributes } from "react"

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
  openAddFriendModal: () => void,
  openAddGroupModal: () => void,
  openUserProfileModal: () => void,
  openLogoutModal: () => void,
}

export interface propsGroupDropdown {
  openAddFriendGroupModal: () => void,
  openGroupProfileModal: () => void,
  openExitModal: () => void,
}

export interface propsFriendDropdown {
  openFriendProfileModal: () => void,
  openDeleteFriendModal: () => void,
}


// Add friend in group

export interface propsFriendCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  email: string
}

export interface CreateGroupForm {
  name: string,
  friends: { [key: string]: boolean };
}

export interface FriendsForm {
  friends: { [key: string]: boolean };
}
