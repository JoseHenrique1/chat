import { FastifyInstance, HookHandlerDoneFunction } from "fastify";
import { AuthController } from "./auth.controller";
import { AuthSchema } from "./auth.schema";


export function AuthRoute(fastify: FastifyInstance, opts: any, done: HookHandlerDoneFunction) {
  fastify.post("/signin", AuthSchema.sigin,  AuthController.sigin)

  //pegar dados do user logado
  fastify.get("/user",  AuthController.user)

  fastify.post("/signup", AuthSchema.sigup , AuthController.signup)

  done()
}