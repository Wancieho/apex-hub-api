import tournamentSeed from "./tournament";
import userSeed from "./user";

const seeds = async () => {
  if (process.env.ENVIRONMENT === "local") {
    // #TODO: fix any
    const user: any = await userSeed();

    if (user) {
      tournamentSeed(user.uuid);

      tournamentSeed(user.uuid);

      tournamentSeed(user.uuid);
    }
  }
};
seeds();
