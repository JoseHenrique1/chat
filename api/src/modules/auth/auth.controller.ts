import { FastifyRequest, FastifyReply } from "fastify";
import { UserController } from "../user/user.controller";
import { AuthService } from "./auth.service";
import { authType, userAuth } from "./auth.schema";
import { verify } from "jsonwebtoken";
import { prisma } from "../../databse/prisma";

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

interface userInterface {
  email: string,
  name: string
}

async function user(request: FastifyRequest<{Headers: userAuth}>, reply: FastifyReply) {
  const authorization = request.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    reply.code(401).send({ message: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];
  const decoded = verify(token, process.env.JWT_SECRET_KEY || "") as userInterface
  
  const user = await prisma.user.findUnique({
    where: {
      email: decoded.email
    },
    select: {
      email: true,
      name: true
    }
  })

  reply.send(user)
}

export const AuthController = {
  sigin,
  signup: UserController.createUser,
  user
}