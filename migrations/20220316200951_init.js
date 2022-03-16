/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export const up = (knex) => {
  return knex.schema
    .createTable("posts", (table) => {
      table.uuid("id").notNullable().primary();
      table.text("title").notNullable();
      table.text("content").notNullable();
      table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTable("posts");
};
