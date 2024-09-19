import * as dotenv from "dotenv";

dotenv.config();

// export default {
//   schema: "./src/schema.ts", // Path to your database schema (where tables are defined)
//   out: "./migrations", // Folder where migrations will be stored
//   //   connectionString: process.env.DATABASE_URL, // PostgreSQL connection string
//   //   connectionString: "postgres://postgres:admin@localhost:5432/postgres",
//   dialect: "postgres", // Database dialect
//   dbCredentials: {
//     host: process.env.DB_HOST || "localhost",
//     user: process.env.DB_USER || "postgres",
//     password: process.env.DB_PASSWORD || "admin",
//     database: process.env.DB_NAME || "postgres",
//   },
// };

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/models/index.ts",
  dialect: "postgresql",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgres://localhost:5432/defaultdb", // Provide a default URL
  },
  verbose: true,
  strict: true,
});
