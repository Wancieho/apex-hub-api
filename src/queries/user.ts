import { InputError } from "../errors";
import User from "../models/user";
import { inputValidation } from "../utility/general";
import { v4 as uuidv4 } from "uuid";

export type UserCreate = {
  gcpToken: string;
  username: string;
};

const create = async (inputs: UserCreate) => {
  inputValidation(inputs, ["gcpToken", "username"], "User create");

  const { gcpToken, username } = inputs;

  const user = await User.create({
    uuid: uuidv4(),
    gcpToken,
    username,
  });

  const cleaned = JSON.parse(JSON.stringify(user));

  delete cleaned.id;

  return cleaned;
};

const find = async (uuid: string) => {
  inputValidation(uuid, ["uuid"], "User find");

  const user = await User.findOne({
    attributes: ["username"],
    where: { uuid },
  });

  return user;
};

export { create, find };
