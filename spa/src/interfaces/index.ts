import { ReactNode, InputHTMLAttributes } from "react"

//Login
export interface responseToken {
  data: {
    token: string
  }
}

export type InputsLogin = {
  type: "email" | "password"
  email: string
  password: string
}

enum ImageUserEnum {
  default = "default",
  male = "male",
  female = "female",
}

export type InputsRegistration = {
  type: "email" | "password" | "name"
  name: string
  email: string
  password: string
  img: ImageUserEnum
}

export type AuthInputs = {
  name: string
  email: string
  password: string
  img: ImageUserEnum
}


// Message

export interface propsMessage {
  isFriend?: boolean
  message: string
}

// Modal

export interface propsModal {
  isOpen: boolean,
  handleClose: () => void,
  children: ReactNode,
  title: string
}

// badge

export interface propsBadge {
  children: "Amigos"|"Grupos"|"Não lidas"| ReactNode
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

// alert

export interface propsAlert {
  message?: string
}

//radio avatar

export interface propsAvatarRadio extends InputHTMLAttributes<HTMLInputElement> {
  avatar: string,
  pathImg: string
}