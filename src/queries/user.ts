import User from "../models/user";
import { v4 as uuidv4 } from "uuid";

export type UserCreate = {
  gcpToken: string;
  username: string;
};

const create = async ({ gcpToken, username }: UserCreate) => {
  if (!gcpToken) {
    throw new Error("GCP token must be defined");
  }

  if (!username) {
    throw new Error("Username must be defined");
  }

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
  if (!uuid) {
    throw new Error("UUID must be defined");
  }

  const user = await User.findOne({
    attributes: ["username"],
    where: { id: uuid },
  });

  return user;
};

export { create, find };
