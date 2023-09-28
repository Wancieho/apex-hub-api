import Tournament from "../../models/tournament";
import { errorInfo } from "../../utility/general";

const tournamentMigration = async () => {
  try {
    Tournament.sync({ force: true }).then(() =>
      console.info("Tournament table created")
    );
  } catch (e: any) {
    console.log(
      `Tournament table creation failed${
        e?.original?.errno === 1062 ? ": User already exists" : errorInfo(e)
      }`
    );
  }
};
export default tournamentMigration;
