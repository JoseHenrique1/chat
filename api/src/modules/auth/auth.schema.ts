import { z } from "zod"
import { UserSchema } from "../user/user.schema"

export type doneType = (err?: Error) => void

const user = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

const sigin = {
  schema: {
    body: user
  }
}

export type authType = z.infer<typeof user>

export const AuthSchema = {
  sigin,
  sigup: UserSchema.createUser
}