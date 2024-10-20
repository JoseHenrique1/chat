import { z } from "zod"

const user = z.object({
  email: z.string().email(),
  name: z.string().nullable(),
  password: z.string().min(6),
  img: z.string(),
  teste: z.string().nullish()
})

const createUser = {
  schema: {
    body: user
  }
}

const getUser = {
  schema: {
    params: z.object({
      email: z.string().email()
    })
  }
}

const patchUser = {
  schema: {
    params: z.object({
      email: z.string().email()
    }),
    body: z.object({
      email: z.string().email().optional(),
      name: z.string().nullable().optional(),
      password: z.string().min(6).optional(),
      img: z.string().optional(),
      teste: z.string().nullish().optional()
    })
  }
}

const putUser = {
  schema: {
    params: z.object({
      email: z.string().email()
    }),
    body: user
  }
}

const deleteUser = {
  schema: {
    params: z.object({
      email: z.string().email()
    })
  }
}


export type UserType = z.infer<typeof user>

export const UserSchema = {
  createUser,
  getUser,
  patchUser,
  putUser,
  deleteUser
}