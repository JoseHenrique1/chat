import { FastifyInstance, HookHandlerDoneFunction } from "fastify";
import { UserController } from "./user.controller";
import { UserSchema } from "./user.schema";
import { AuthHook } from "../auth/auth.hook";

export function UserRoute(fastify: FastifyInstance, opts: any, done: HookHandlerDoneFunction) {
  fastify.decorateRequest(...AuthHook.decoratorUser)

  fastify.addHook("preHandler", AuthHook.verifyToken)

  fastify.get("/", UserController.getUsers);

  fastify.post("/", UserSchema.createUser, UserController.createUser);

  fastify.get("/:email", UserSchema.getUser, UserController.getUser);

  fastify.put("/:email", UserSchema.putUser, UserController.putUser);

  fastify.patch("/:email", UserSchema.patchUser, UserController.patchUser);

  fastify.delete("/:email", UserSchema.deleteUser, UserController.deleteUser);

  done();
}
