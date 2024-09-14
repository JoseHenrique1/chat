import Fastify from 'fastify'
import fastifySocketIO from 'fastify-socket.io';
import fastifyCors from '@fastify/cors';
import { UserRoute } from './modules/user/user.route.ts'
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { AuthRoute } from './modules/auth/auth.route.ts';
import { GroupRoute } from './modules/group/group.route.ts';
import { FriendRoute } from './modules/friend/friend.route.ts';

const fastify = Fastify({logger: false})

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);
fastify.register(fastifyCors, { origin: "*" });
fastify.register(fastifySocketIO, {
  cors: {
    origin: "*"
  }
});

fastify.withTypeProvider<ZodTypeProvider>().register(AuthRoute, { prefix: "/auth" })
fastify.withTypeProvider<ZodTypeProvider>().register(UserRoute, { prefix: "/users" })
fastify.withTypeProvider<ZodTypeProvider>().register(GroupRoute, { prefix: "/groups" })
fastify.withTypeProvider<ZodTypeProvider>().register(FriendRoute, { prefix: "/friends" })


declare module 'fastify' {
  interface FastifyInstance {
    io: any
  }
  interface FastifyRequest {
    websocket: dataInterface | null | undefined
  }
}

interface dataInterface {
  from: string,
  destiny: string,
  message: string
}

fastify.get('/', function (request, reply) {
  request.websocket = {
    from: "",
    destiny: "",
    message: ""
  }
  reply.send({ hello: 'world' })
})

fastify.ready().then(() => {
  fastify.io.on("connection", (socket: any) => {
    socket.on("global", (data: dataInterface) => {
      console.log("->" + JSON.stringify(data.message));
      socket.broadcast.emit(data.destiny, data)
    });
  });
});

fastify.addHook('onResponse', (request, reply, done) => {
  const data = request.websocket
  if (data) {
    const { destiny } = data

    fastify.io.emit(destiny, data)
  }
  done()
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
  }
})