export interface responseToken {
  data: {
    token: string
  }
}

export type InputsLogin = {
  email: string
  password: string
}

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

