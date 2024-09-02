import Fastify from 'fastify'
import { UserRoute } from './modules/user/user.route.ts'
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { AuthRoute } from './modules/auth/auth.route.ts';
import { GroupRoute } from './modules/group/group.route.ts';
import { FriendRoute } from './modules/friend/friend.route.ts';

const fastify = Fastify({
  logger: false
})

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

/*
cors
socket io
*/

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.withTypeProvider<ZodTypeProvider>().register(AuthRoute, {prefix: "/auth"})
fastify.withTypeProvider<ZodTypeProvider>().register(UserRoute, {prefix: "/users"})
fastify.withTypeProvider<ZodTypeProvider>().register(GroupRoute, {prefix: "/groups"})
fastify.withTypeProvider<ZodTypeProvider>().register(FriendRoute, {prefix: "/friends"})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
  }
})