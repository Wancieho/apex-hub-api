import Tournament from "../models/tournament";

const all = async () => {
  const tournaments = await Tournament.findAll({
    attributes: ["name"],
  });

  return tournaments;
};
export default all;
