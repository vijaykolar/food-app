import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
import express from "express";
import cors from "cors";

import { usersRouter } from "./routes/users";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
