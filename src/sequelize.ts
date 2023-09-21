import { Dialect } from "sequelize/types/sequelize";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "database",
  process.env.DB_USERNAME || "root",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: (process.env.DB_DIALECT || "mysql") as Dialect,
  }
);

process.env.CONSOLE_LOGGING === "true" && console.info(sequelize.config);

export default sequelize;
