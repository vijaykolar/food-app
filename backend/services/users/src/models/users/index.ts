import { sql } from 'drizzle-orm';
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id')
    .primaryKey()
    .default(sql`gen_random_uuid()`)
    .notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email').unique().notNull(),
});
