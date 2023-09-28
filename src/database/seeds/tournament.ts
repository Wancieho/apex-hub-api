import Tournament from "../../models/tournament";
import { errorInfo } from "../../utility/general";
import { v4 as uuidv4 } from "uuid";

const tournamentSeed = async (user_uuid: string) => {
  try {
    const daysFromToday = Math.round(Math.random() * 100 + 100);

    const tournament = await Tournament.create({
      uuid: uuidv4(),
      user_uuid,
      name: `seed ${new Date()}`,
      start_date: new Date(
        new Date().getTime() + daysFromToday * 24 * 60 * 60 * 1000
      ),
    });

    console.log(`Tournament created: ${JSON.stringify(tournament)}`);
  } catch (e: any) {
    console.log(
      `An error was encountered${
        e?.original?.errno === 1062
          ? ": Tournament already exists"
          : errorInfo(e)
      }`
    );
  }
};
export default tournamentSeed;
