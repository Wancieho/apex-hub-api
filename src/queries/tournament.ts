import Tournament from "../models/tournament";
import User from "../models/user";
import { v4 as uuidv4 } from "uuid";

export type TournamentCreate = {
  uuid: string;
  user_uuid: string;
  name: string;
};

const create = async ({ user_uuid, name }: TournamentCreate) => {
  if (!user_uuid) {
    throw new Error("Tournament create - 'user_uuid' must be defined");
  }

  if (!name) {
    throw new Error("Tournament create - 'name' must be defined");
  }

  if (
    !(await User.findOne({
      attributes: ["uuid"],
      where: { uuid: user_uuid },
    }))
  ) {
    throw new Error("User not found");
  }

  const tournament = await Tournament.create({
    uuid: uuidv4(),
    user_uuid,
    name,
  });

  const cleaned = JSON.parse(JSON.stringify(tournament));

  delete cleaned.id;

  return cleaned;
};

const all = async () => {
  const tournaments = await Tournament.findAll({
    attributes: ["uuid", "user_uuid", "name"],
  });

  return tournaments;
};

export { create, all };
