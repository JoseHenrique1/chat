import { FastifyInstance, HookHandlerDoneFunction, FastifyReply, FastifyRequest } from "fastify";
import { GroupController } from "./group.controller";
import { GroupSchema } from "./group.schema";
import { AuthHook } from "../auth/auth.hook";

export function GroupRoute(fastify: FastifyInstance, opts: any, done: HookHandlerDoneFunction) {
  fastify.decorateRequest(...AuthHook.decoratorUser)

  fastify.addHook("preHandler", AuthHook.verifyToken)

  fastify.get("/", GroupController.getGroups);

  fastify.post("/", GroupSchema.createGroup, GroupController.createGroup);

  fastify.get("/:id", GroupSchema.getGroup, GroupController.getGroup);

  fastify.put("/:id", GroupSchema.putGroup, GroupController.putGroup);

  fastify.patch("/:id", GroupSchema.patchGroup, GroupController.patchGroup);

  fastify.delete("/:id", GroupSchema.deleteGroup, GroupController.deleteGroup);

  fastify.get("/:id/users", GroupController.getUsersOnGroup)

  fastify.post("/:id/users", GroupController.createUserOnGroup)

  fastify.get("/:id/messages", GroupController.getMessages)

  fastify.post("/:id/messages", GroupController.createMessage)

  done();
}
