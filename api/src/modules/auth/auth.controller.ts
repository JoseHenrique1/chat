import { FastifyRequest, FastifyReply } from "fastify";
import { UserController } from "../user/user.controller";
import { AuthService } from "./auth.service";
import { authType } from "./auth.schema";

async function sigin(request: FastifyRequest<{Body: authType}>, reply: FastifyReply) {
  const email = request.body.email
  const password = request.body.password

  const user = await AuthService.getUser(email, password)
  if (!user) {
    reply.status(401).send({ message: "Invalid credentials" });
    return;
  }

  const token = AuthService.signin(user.id, user.email);
  reply.send({token})
}

export const AuthController = {
  sigin,
  signup: UserController.createUser
}