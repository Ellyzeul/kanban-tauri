import { exit } from "process";
import config from "./config";

const server = config({ logger: true })

server.listen({ port: 3000 }, (err, _) => {
  if(err) {
    server.log.error(err)
    exit(1)
  }
})
