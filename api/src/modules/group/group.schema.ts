import { z } from "zod"

const group = z.object({
  name: z.string()
})

const createGroup = {
  schema: {
    body: group
  }
}

const getGroup = {
  schema: {
    params: z.object({
      id: z.string().uuid()
    })
  }
}

const patchGroup = {
  schema: {
    params: z.object({
      id: z.string().uuid()
    }),
    body: z.object({
      name: z.string().nullable().optional(),
    })
  }
}

const putGroup = {
  schema: {
    params: z.object({
      id: z.string().uuid()
    }),
    body: group
  }
}

const deleteGroup = {
  schema: {
    params: z.object({
      id: z.string().uuid()
    })
  }
}


export type GroupType = z.infer<typeof group>

export const GroupSchema = {
  createGroup,
  getGroup,
  patchGroup,
  putGroup,
  deleteGroup
}