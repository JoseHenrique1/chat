import Fastify from 'fastify'
import { UserRoute } from './modules/user/user.route.ts'
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { AuthRoute } from './modules/auth/auth.route.ts';

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

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
  }
})