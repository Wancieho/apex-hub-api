import User from "../models/user";

const UserMigration = async () => {
  try {
    User.sync().then(() => console.info("Sync complete"));

    return { msg: "Table created" };
  } catch (err) {
    return { msg: "Table creation failed" };
  }
};
export default UserMigration;
