import { InputError } from "../errors";
import Tournament from "../models/tournament";
import { find } from "./user";
import { inputValidation } from "../utility/general";
import { v4 as uuidv4 } from "uuid";

export type TournamentCreate = {
  uuid: string;
  user_uuid: string;
  name: string;
  start_date: string;
};

const all = async () => {
  const tournaments = await Tournament.findAll({
    attributes: ["uuid", "user_uuid", "name", "start_date"],
  });

  return tournaments;
};

const create = async (inputs: TournamentCreate) => {
  inputValidation(
    inputs,
    ["name", "user_uuid", "start_date"],
    "Tournament create"
  );

  const { user_uuid, name, start_date } = inputs;

  if (!(await find(user_uuid))) {
    throw new InputError("User not found");
  }

  const tournament = await Tournament.create({
    uuid: uuidv4(),
    user_uuid,
    name,
    start_date,
  });

  const cleaned = JSON.parse(JSON.stringify(tournament));

  delete cleaned.id;

  return cleaned;
};

export { create, all };
