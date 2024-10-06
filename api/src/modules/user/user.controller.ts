import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./user.service";
import { UserType } from "./user.schema";


async function getUser(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  const { email } = request.params;
  const user = await UserService.getUser(email);
  reply.send({user})
}

async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = await UserService.getUsers();
  reply.send({users})
}

async function createUser(request: FastifyRequest<{ Body: UserType }>, reply: FastifyReply) {
  const userExists = await UserService.getUserByEmail(request.body.email);
  if (userExists) {
    reply.status(409).send({ message: "User already exists" });
    return;
  }
  const user = await UserService.createUser(request.body);
  reply.status(201).send({user})
}

async function putUser(request: FastifyRequest<{ Params: { email: string }, Body: UserType }>, reply: FastifyReply) {
  const { email } = request.params;
  const user = await UserService.getUser(email);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
    return;
  }
  const newUser = await UserService.updateUser(email, request.body);
  reply.send({user: newUser})
}

async function patchUser(request: FastifyRequest<{ Params: { email: string }, Body: UserType }>, reply: FastifyReply) {
  const { email } = request.params;
  const user = await UserService.getUser(email);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
    return;
  }
  const newUser = await UserService.updateUser(email, {...user,...request.body });
  reply.send({user:newUser})
}

async function deleteUser(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  const { email } = request.params;
  const user = await UserService.getUser(email);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
    return;
  }
  const userDeleted = await UserService.deleteUser(email);
  reply.send({user: userDeleted})
}

export const UserController = {
  getUser,
  getUsers,
  createUser,
  putUser,
  patchUser,
  deleteUser,
}
