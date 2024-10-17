import { FastifyInstance, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { FriendController } from "./friend.controller";
import { FriendSchema } from "./friend.schema";
import { AuthHook } from "../auth/auth.hook";

export function FriendRoute(fastify: FastifyInstance, opts: any, done: HookHandlerDoneFunction) {

  fastify.decorateRequest(...AuthHook.decoratorUser)
  fastify.addHook("preHandler", AuthHook.verifyToken)

  fastify.get("/", FriendController.getFriends)

  fastify.post("/", FriendSchema.createFriend, FriendController.createFriend);

  fastify.delete("/:email", FriendSchema.deleteFriend, FriendController.deleteFriend);

  fastify.get("/:email/messages", FriendSchema.getMessages, FriendController.getMessages);

  fastify.post("/:email/messages", FriendSchema.createMessage, FriendController.createMessage);

  done();
}
