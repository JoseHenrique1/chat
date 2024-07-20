import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

/*
cors
prisma
zod
socket io
*/
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
  }
})