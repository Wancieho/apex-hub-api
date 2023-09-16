import express, { Request, Response, Router } from "express";

import { all } from "../queries/tournament";
import { errorInfo } from "../utility/general";

const router: Router = express.Router();

router.get("/tournaments", async (_: Request, res: Response) => {
  try {
    res.status(200).send(await all());
  } catch (e: any) {
    res.status(400).send({
      message: `An error was encountered${errorInfo(e)}`,
    });
  }
});

export default router;
