import Fastify from "fastify";
import posts from "./routes/posts.js";

const fastify = Fastify({ logger: true });

fastify.register(posts, { prefix: "/posts" });

try {
  await fastify.listen(process.env.PORT || 3000);
} catch (err) {
  fastify.log.error(err);
  process.exit();
}
