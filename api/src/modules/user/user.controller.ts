import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./user.service";
import { UserType } from "./user.schema";


async function getUser(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  const { id } = request.params;
  const user = await UserService.getUser(id);
  reply.send({user})
}

async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = await UserService.getUsers();
  reply.send({users})
}

async function createUser(request: FastifyRequest<{ Body: UserType }>, reply: FastifyReply) {
  const user = await UserService.createUser(request.body);
  reply.status(201).send({user})
}

async function putUser(request: FastifyRequest<{ Params: { id: string }, Body: UserType }>, reply: FastifyReply) {
  const { id } = request.params;
  const user = await UserService.getUser(id);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
    return;
  }
  const newUser = await UserService.updateUser(id, request.body);
  reply.send({user: newUser})
}

async function patchUser(request: FastifyRequest<{ Params: { id: string }, Body: UserType }>, reply: FastifyReply) {
  const { id } = request.params;
  const user = await UserService.getUser(id);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
    return;
  }
  const newUser = await UserService.updateUser(id, {...user,...request.body });
  reply.send({user:newUser})
}

async function deleteUser(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  const { id } = request.params;
  const user = await UserService.getUser(id);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
    return;
  }
  const userDeleted = await UserService.deleteUser(id);
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
