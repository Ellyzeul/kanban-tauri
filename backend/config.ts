import fastify from "fastify"
import { pipe } from "./lib/uitls/pipe"

const config = (opts: {}) => {
  const server = fastify(opts)

  return pipe(server)
}

export default config
