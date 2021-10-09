import type { FastifyPluginAsync } from "fastify"
import { sum } from 'seartipy-core'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return `this is an example ${sum(100, 200)}`
  })
}

export default example
