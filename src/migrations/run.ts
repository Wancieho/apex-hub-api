import TournamentMigration from "./tournament";
import UserMigration from "./user";

const RunMigrations = (): void => {
  if (process.env.ENVIRONMENT === "local") {
    TournamentMigration();

    UserMigration();
  }
};
export default RunMigrations;
