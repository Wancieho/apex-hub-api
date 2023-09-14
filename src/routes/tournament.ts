import express, { Request, Response, Router } from "express";

import all from "../queries/tournaments";

const router: Router = express.Router();

router.get("/tournaments", async (_: Request, res: Response) => {
  try {
    res.status(200).send(await all());
  } catch (e: any) {
    process.env.CONSOLE_LOGGING === "true" &&
      console.log(e?.original?.code || e, `"${e?.sql}"`);

    res
      .status(400)
      .send({ message: `An error was encountered ${e?.original?.errno}` });
  }
});

export default router;
