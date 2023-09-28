import User from "../../models/user";
import { errorInfo } from "../../utility/general";

const userMigration = async () => {
  try {
    User.sync({ force: true }).then(() => console.info("User table created"));

    return { message: "User table created" };
  } catch (e: any) {
    console.log({
      message: `User table creation failed${
        e?.original?.errno === 1062 ? ": User already exists" : errorInfo(e)
      }`,
    });
  }
};
export default userMigration;
