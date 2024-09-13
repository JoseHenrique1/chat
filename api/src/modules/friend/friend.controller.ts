import { FastifyReply, FastifyRequest } from "fastify";
import { FriendService } from "./friend.service";

async function getFriends(request: FastifyRequest, reply: FastifyReply) {
  const email = request.user.email
  const friendsOfUser = await FriendService.getFriends(email)

  const friends = friendsOfUser.map(friend => friend.friend);

  return { friends };
}

async function createFriend(request: FastifyRequest<{ Body: { email: string } }>, reply: FastifyReply) {
  const email = request.user.email

  const emailFriend = request.body.email

  // adicionar na tabela friends juntamente com o user do token
  await FriendService.createFriend(email, emailFriend)

  // pegar os dados do friend adicionado
  const friend = await FriendService.getUserByEmail(emailFriend)


  return { friend }
}

async function deleteFriend(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  const email = request.user.email
  const friendEmail = request.params.email

  const friendDeleted = await FriendService.deleteFriend(email, friendEmail)

  return { friendDeleted }
}

async function getMessages(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  const email = request.user.email
  const friendEmail = request.params.email

  const messages = await FriendService.getMessages(email!, friendEmail)

  return { messages }
}
async function createMessage(request: FastifyRequest<{ Params: { email: string }, Body: { message: string } }>, reply: FastifyReply) {
  const email = request.user.email

  const emailFriend = request.params.email
  const messageBody = request.body.message

  const message = await FriendService.createMessage(email, emailFriend, messageBody)

  return { message }
}

export const FriendController = {
  getFriends,
  createFriend,
  deleteFriend,
  getMessages,
  createMessage,
}