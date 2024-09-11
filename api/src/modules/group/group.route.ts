import { FastifyInstance, HookHandlerDoneFunction, FastifyReply, FastifyRequest } from "fastify";
import { GroupController } from "./group.controller";
import { GroupSchema } from "./group.schema";
import { AuthHook } from "../auth/auth.hook";
import { prisma } from "../../databse/prisma";

export function GroupRoute(fastify: FastifyInstance, opts: any, done: HookHandlerDoneFunction) {
  fastify.decorateRequest(...AuthHook.decoratorUser)

  fastify.addHook("preHandler", AuthHook.verifyToken)

  fastify.get("/", GroupController.getGroups);

  fastify.post("/", GroupSchema.createGroup, GroupController.createGroup);

  fastify.get("/:id", GroupSchema.getGroup, GroupController.getGroup);

  fastify.put("/:id", GroupSchema.putGroup, GroupController.putGroup);

  fastify.patch("/:id", GroupSchema.patchGroup, GroupController.patchGroup);

  fastify.delete("/:id", GroupSchema.deleteGroup, GroupController.deleteGroup);

  fastify.get("/:id/users", async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply)=> {
    const {id} = request.params

    const usersOnGroups = await prisma.userOnGroup.findMany({
      where: {
        groupId: id,
      }
    })

    return {user: usersOnGroups}
  })

  fastify.post("/:id/users", async (request: FastifyRequest<{ Params: { id: string }, Body: { email: string } }>, reply: FastifyReply)=> {
    const {id} = request.params
    const {email} = request.body

    const userAdded = await prisma.userOnGroup.create({
      data: {
        groupId: id,
        emailUser: email
      }
    })

    return {user: userAdded} 
  })

  fastify.get("/:id/messages", GroupController.getMessages)

  fastify.post("/:id/messages", GroupController.createMessage)

  done();
}
