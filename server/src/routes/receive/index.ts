import type { FastifyPluginAsync } from "fastify"

const receive: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', { websocket: true }, (connection /* SocketStream */, req /* FastifyRequest */) => {
    connection.socket.on('message', message => {
      // message.toString() === 'hi from client'
      connection.socket.send('hi')
    })
  })
}

export default receive


