import { UserCreate, create, find } from "../queries/user";
import express, { Request, Response, Router } from "express";

import { errorInfo } from "../utility/general";

const router: Router = express.Router();

router.get("/user", async (req: Request, res: Response) => {
  try {
    res.status(200).send((await find(req?.body?.uuid)) || {});
  } catch (e: any) {
    res.status(400).send({
      message: `An error was encountered${errorInfo(e)}`,
    });
  }
});

router.post("/user", async (req: Request, res: Response) => {
  try {
    res.status(200).send((await create(req.body as UserCreate)) || {});
  } catch (e: any) {
    res.status(400).send({
      message: `An error was encountered${errorInfo(e)}`,
    });
  }
});

export default router;
