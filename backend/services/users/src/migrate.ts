import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db";

// Run migrations
async function runMigrations() {
  await migrate(db, { migrationsFolder: "./migrations" });
  console.log("Migrations applied");
}

runMigrations();
