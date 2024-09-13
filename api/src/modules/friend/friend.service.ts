import { prisma } from "../../databse/prisma"

async function getFriends(email: string) {
  const friends = await prisma.friends.findMany({
    where: {
      emailUser: email,
    },
    select: {
      friend: {
        select: {
          name: true,
          email: true
        }
      }
    }
  });

  return friends;
}

async function createFriend(emailUser: string, emailFriend: string) {
  const friend = await prisma.friends.create({
    data: {
      emailUser: emailUser,
      emailFriend: emailFriend,
    },
  });

  return friend
}

async function deleteFriend(emailUser: string, emailFriend: string) {
  const friend = await prisma.friends.delete({
    where: {
      emailUser_emailFriend: {
        emailFriend: emailFriend,
        emailUser: emailUser,
      }
    },
  })

  return { friend }
}

async function getMessages(emailUser: string, emailFriend: string) {
  const messages = await prisma.userMessagePrivate.findMany({
    where: {
      OR: [
        { emailFriend, emailUser },
        { emailFriend: emailUser, emailUser: emailFriend }
      ],
    }
  });

  return { messages }
}
async function createMessage(emailUser: string, emailFriend: string, message: string) {
  const messageCreated = await prisma.userMessagePrivate.create({
    data: {
      message: message,
      emailFriend,
      emailUser
    }
  })

  return { message: messageCreated }
}

async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
  })
  return user;
}

async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { name: true, email: true }
  })
  return user;
}

export const FriendService = {
  getFriends,
  createFriend,
  deleteFriend,
  getMessages,
  createMessage,
  getUserByEmail
}