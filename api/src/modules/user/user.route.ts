import { FastifyInstance } from "fastify";
import { UserController } from "./user.controller";
import { UserSchema, doneType } from "./user.schema";

export function UserRoute(fastify: FastifyInstance, opts: any, done: doneType) {
  fastify.get("/", UserController.getUsers)

  fastify.post("/", UserSchema.createUser, UserController.createUser)

  fastify.get("/:id", UserSchema.getUser, UserController.getUser)

  fastify.put("/:id", UserSchema.putUser, UserController.putUser)

  fastify.patch("/:id", UserSchema.patchUser, UserController.patchUser)

  fastify.delete("/:id", UserSchema.deleteUser, UserController.deleteUser)

  done()
}