import { TournamentCreate, all, create } from "../queries/tournament";
import express, { Request, Response, Router } from "express";

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

router.post("/tournament", async (req: Request, res: Response) => {
  try {
    res.status(200).send((await create(req.body as TournamentCreate)) || {});
  } catch (e: any) {
    res.status(400).send({
      message: `An error was encountered${errorInfo(e)}`,
    });
  }
});

export default router;
