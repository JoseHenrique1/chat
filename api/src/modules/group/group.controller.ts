import { FastifyReply, FastifyRequest } from "fastify";
import { GroupService } from "./group.service";
import { GroupType } from "./group.schema";


async function getGroup(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  const { id } = request.params;
  const group = await GroupService.getGroup(id);
  reply.send(group)
}

async function getGroups(request: FastifyRequest, reply: FastifyReply) {
  const groups = await GroupService.getGroups();
  reply.send(groups)
}

async function createGroup(request: FastifyRequest<{ Body: GroupType }>, reply: FastifyReply) {
  const group = await GroupService.createGroup(request.body);
  reply.status(201).send(group)
}

async function putGroup(request: FastifyRequest<{ Params: { id: string }, Body: GroupType }>, reply: FastifyReply) {
  const { id } = request.params;
  const group = await GroupService.getGroup(id);
  if (!group) {
    reply.status(404).send({ message: "Group not found" });
    return;
  }
  const newGroup = await GroupService.updateGroup(id, request.body);
  reply.send({group: newGroup})
}

async function patchGroup(request: FastifyRequest<{ Params: { id: string }, Body: GroupType }>, reply: FastifyReply) {
  const { id } = request.params;
  const group = await GroupService.getGroup(id);
  if (!group) {
    reply.status(404).send({ message: "Group not found" });
    return;
  }
  const newGroup = await GroupService.updateGroup(id, {...group,...request.body });
  reply.send({group:newGroup})
}

async function deleteGroup(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  const { id } = request.params;
  const group = await GroupService.getGroup(id);
  if (!group) {
    reply.status(404).send({ message: "Group not found" });
    return;
  }
  const groupDeleted = await GroupService.deleteGroup(id);
  reply.send({Group: groupDeleted})
}

export const GroupController = {
  getGroup,
  getGroups,
  createGroup,
  putGroup,
  patchGroup,
  deleteGroup,
}
