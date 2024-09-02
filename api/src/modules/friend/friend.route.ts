import { FastifyInstance, FastifyRequest, HookHandlerDoneFunction } from "fastify";
/* import { UserController } from "./user.controller";
import { UserSchema } from "./user.schema"; */
import { AuthHook } from "../auth/auth.hook";
import { prisma } from "../../databse/prisma";

export function FriendRoute(fastify: FastifyInstance, opts: any, done: HookHandlerDoneFunction) {
  fastify.decorateRequest(...AuthHook.decoratorUser)

  fastify.addHook("preHandler", AuthHook.verifyToken)

  fastify.get("/", async (request, reply) => {
    // pegando o email do user
    const { id } = request.user;
    const user = await prisma.user.findUnique({ where: { id } })
    const email = user?.email || ""

    // pagando os amigos do user
    const friendsOfUser = await prisma.friends.findMany({
      where: {
        emailUser: email,
      },
      select: {
        friend: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    // retirando o campo friend por ser desnecessario
    const friends = friendsOfUser.map(friend => friend.friend);

    return { friends };
  });

  fastify.post("/", async (request: FastifyRequest<{ Body: { email: string } }>, reply) => {
    const { id } = request.user;
    const user = await prisma.user.findUnique({ where: { id } })

    // pegar o email do friend
    const emailFriend = request.body.email

    //verificar se é um email de um user 

    // adicionar na tabela friends juntamente com o user do token
    await prisma.friends.create({
      data: {
        emailUser: user?.email!,
        emailFriend: emailFriend,
      },
    });

    // pegar os dados do friend adicionado
    const friend = await prisma.user.findUnique({
      where: { email: emailFriend },
      select: {name: true, email: true}
    })

    // retornar os dados do friend adicionado

    return {friend}
  });

  fastify.delete("/:email",async (request: FastifyRequest<{Params: {email: string}}>, reply) => {
    const { id } = request.user;
    const user = await prisma.user.findUnique({ where: { id } })
    const friendEmail = request.params.email

    const friendDeleted = await prisma.friends.delete({
      where: {
        emailUser_emailFriend: {
          emailFriend: friendEmail,
          emailUser: user?.email!,
        }
      },
    })

    return {friendDeleted}
  });

  /* Testar!! */
  fastify.get("/:email/messages", async (request: FastifyRequest<{Params: {email: string}}>, reply) => {
    const { id } = request.user;
    const user = await prisma.user.findUnique({ where: { id } })
    const userEmail = user?.email
    const friendEmail = request.params.email


    const messages = await prisma.userMessagePrivate.findMany({
      where: {
        OR: [
          {emailFriend: friendEmail, emailUser: userEmail},
          {emailFriend: userEmail, emailUser: friendEmail}
        ],
      }
    });

    return {messages}
  });

  fastify.post("/:email/messages", async (request: FastifyRequest<{Params: {email: string}, Body: {message: string}}>, reply) => {
    const { id } = request.user;
    const user = await prisma.user.findUnique({ where: { id } })
    const userEmail = user?.email!

    const email = request.params.email
    const messageBody = request.body.message

    const message = await prisma.userMessagePrivate.create({
      data: {
        message: messageBody,
        emailFriend: email,
        emailUser: userEmail
      }
    })

    return {message}
  });

  done();
}
