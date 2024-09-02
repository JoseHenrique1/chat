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

  fastify.delete("/:id", () => "ok");

  fastify.get("/:id/messages", () => "ok");

  fastify.post("/:id/messages", () => "ok");

  done();
}
