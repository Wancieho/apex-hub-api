import Tournament from "../models/tournament";

// #TODO: create npm command to run migrations
const TournamentMigration = async () => {
  try {
    Tournament.sync().then(() => console.info("Sync complete"));

    return { msg: "Table created" };
  } catch (err) {
    return { msg: "Table creation failed" };
  }
};
export default TournamentMigration;
