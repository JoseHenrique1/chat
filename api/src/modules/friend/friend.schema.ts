import { z} from "zod"

const createFriend = {
  schema: {
    body: z.object({
      email: z.string()
    }),
  }
}

const deleteFriend = {
  schema: {
    params: z.object({
      email: z.string()
    }),
  }
}

const getMessages = {
  schema: {
    params: z.object({
      email: z.string()
    }),
  }
}

const createMessage = {
  schema: {
    params: z.object({
      email: z.string()
    }),
    body: z.object({
      message: z.string(),
    }),
  }
}


export const FriendSchema = {
  createFriend,
  deleteFriend,
  getMessages,
  createMessage,
}