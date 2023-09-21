import RunMigrations from "./migrations/run";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import queryLogger from "./utility/query-logger";
import tournament from "./routes/tournament";
import user from "./routes/user";

dotenv.config();

const app = express();

app.use(cors());
app.use(queryLogger);
app.use(express.json());

// RunMigrations();

app.use("/", tournament);
app.use("/", user);

app.listen(process.env.PORT, () => {
  console.info(`Server running on ${process.env.SERVER}:${process.env.PORT}`);
});
