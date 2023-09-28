import User from "../../models/user";
import { errorInfo } from "../../utility/general";
import { v4 as uuidv4 } from "uuid";

//#TODO: fix return type as custom
const userSeed = async () => {
  try {
    const user = await User.create({
      uuid: uuidv4(),
      gcpToken: "none",
      username: "test",
    });

    console.log(`User created: ${JSON.stringify(user)}`);

    return user;
  } catch (e: any) {
    console.log(
      `An error was encountered${
        e?.original?.errno === 1062 ? ": User already exists" : errorInfo(e)
      }`
    );
  }
};
export default userSeed;
