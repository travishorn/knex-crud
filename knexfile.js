import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: "better-sqlite3",
  connection: {
    filename: join(__dirname, "./db.sqlite3"),
  },
  useNullAsDefault: true,
};
