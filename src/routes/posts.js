import { randomUUID } from "node:crypto";
import { request } from "node:http";
import db from "../db.js";

export default (fastify, opts, done) => {
  // Create
  fastify.post("/", {
    async handler (request) {
      const id = randomUUID();

      await db("posts").insert({
        id,
        title: request.body.title,
        content: request.body.content,
      });

      return await db
        .first([
          "p.id",
          "p.title",
          "p.content",
          "p.created_at",
          "p.updated_at",
        ])
        .from("posts as p")
        .where({ id });
    },
    schema: {
      body: {
        type: "object",
        required: ["title", "content"],
        properties: {
          title: { type: "string" },
          content: { type: "string" },
        },
      },
    },
  });

  // Read all
  fastify.get("/", async () => {
    return await db
      .select([
        "p.id",
        "p.title",
        "p.content",
        "p.created_at",
        "p.updated_at",
      ])
      .from("posts as p")
      .orderBy("p.created_at");
  });

  // Read one
  fastify.get("/:id", async (request) => {
    return await db
      .first([
        "p.id",
        "p.title",
        "p.content",
        "p.created_at",
        "p.updated_at",
      ])
      .from("posts as p")
      .where({ id: request.params.id });
  });

  // Update
  fastify.put("/:id", {
    async handler (request) {
      await db("posts")
        .where({ id: request.params.id })
        .update({
          title: request.body.title,
          content: request.body.content,
          updated_at: db.fn.now(),
        });

      return await db
        .first([
          "p.id",
          "p.title",
          "p.content",
          "p.created_at",
          "p.updated_at",
        ])
        .from("posts as p")
        .where({ id: request.params.id });
    },
    schema: {
      body: {
        type: "object",
        required: ["title", "content"],
        properties: {
          title: { type: "string" },
          content: { type: "string" },
        },
      },
    },
  });

  // Delete
  fastify.delete("/:id", async (request) => {
      const deleted = await db
        .first([
          "p.id",
          "p.title",
          "p.content",
          "p.created_at",
          "p.updated_at",
        ])
        .from("posts as p")
        .where({ id: request.params.id });

      await db("posts")
        .where({ id: request.params.id })
        .delete();

      return deleted;
  });

  done();
};
