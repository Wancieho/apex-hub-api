import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import queryLogger from "./utility/query-logger";
import tournament from "./routes/tournament";

dotenv.config();

const app = express();

app.use(cors());
app.use(queryLogger);
app.use(express.json());

app.use("/", tournament);

app.listen(process.env.PORT, () => {
  console.info(`Server running on ${process.env.DB_HOST}:${process.env.PORT}`);
});
