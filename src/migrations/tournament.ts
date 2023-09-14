import Tournament from "../models/tournament";

// #TODO: test using migrations
const tournament = async () => {
  console.log("sequelize.sync()");

  try {
    Tournament.sync().then(() => console.log("Sync complete"));

    return { msg: "Table created" };
  } catch (err) {
    return { msg: "Table creation failed" };
  }
};
export default tournament;
