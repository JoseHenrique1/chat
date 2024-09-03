import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from "fastify";
import { verify } from "jsonwebtoken";

declare module 'fastify' {
  interface FastifyRequest {
    user: { id: string }
  }
}

interface decodedInterface {
  id: string;
}

type decoratorUserType = ["user", {id: string}]

const decoratorUser: decoratorUserType = ["user", { id: "" }]

// Este hook verifica o token a adiciona o user no objeto fastify
function verifyToken (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
  const authorization = request.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    reply.code(401).send({ message: "Unauthorized" });
    return done();
  }

  const token = authorization.split(" ")[1];
  const decoded = verify(token, process.env.JWT_SECRET_KEY || "") as decodedInterface
  
  request.user = decoded;
  done();
}

export const AuthHook = {
  decoratorUser,
  verifyToken
}