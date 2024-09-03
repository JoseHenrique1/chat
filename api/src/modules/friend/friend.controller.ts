import { FastifyReply, FastifyRequest } from "fastify";
import { FriendService } from "./friend.service";
import { prisma } from "../../databse/prisma"

async function getFriends(request: FastifyRequest, reply: FastifyReply) {
  // pegando o email do user
  const { id } = request.user;
  const user = await prisma.user.findUnique({ where: { id } })
  const email = user?.email || ""

  // pagando os amigos do user
  const friendsOfUser = await FriendService.getFriends(email)

  // retirando o campo friend por ser desnecessario
  const friends = friendsOfUser.map(friend => friend.friend);

  return { friends };

}

async function createFriend(request: FastifyRequest<{ Body: { email: string } }>, reply: FastifyReply) {
  const { id } = request.user;
  const user = await prisma.user.findUnique({ where: { id } })

  // pegar o email do friend
  const emailFriend = request.body.email

  //verificar se é um email de um user 

  // adicionar na tabela friends juntamente com o user do token
  await FriendService.createFriend(user?.email!, emailFriend)

  // pegar os dados do friend adicionado
  const friend = await prisma.user.findUnique({
    where: { email: emailFriend },
    select: { name: true, email: true }
  })

  // retornar os dados do friend adicionado

  return { friend }
}

async function deleteFriend(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  const { id } = request.user;
  const user = await prisma.user.findUnique({ where: { id } })
  const friendEmail = request.params.email

  const friendDeleted = await FriendService.deleteFriend(user?.email!, friendEmail)

  return { friendDeleted }
}

async function getMessages(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  const { id } = request.user;
  const user = await prisma.user.findUnique({ where: { id } })
  const userEmail = user?.email
  const friendEmail = request.params.email

  const messages = await FriendService.getMessages(userEmail!, friendEmail)

  return { messages }
}
async function createMessage(request: FastifyRequest<{ Params: { email: string }, Body: { message: string } }>, reply: FastifyReply) {
  const { id } = request.user;
  const user = await prisma.user.findUnique({ where: { id } })
  const userEmail = user?.email!

  const email = request.params.email
  const messageBody = request.body.message

  const message = await FriendService.createMessage(userEmail, email, messageBody)

  return { message }
}

export const FriendController = {
  getFriends,
  createFriend,
  deleteFriend,
  getMessages,
  createMessage,
}