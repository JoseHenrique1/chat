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

