import tournamentMigration from "./tournament";
import userMigration from "./user";

const migrations = (): void => {
  if (process.env.ENVIRONMENT === "local") {
    tournamentMigration();

    userMigration();
  }
};
migrations();
