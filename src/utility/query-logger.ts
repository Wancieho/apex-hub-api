import { NextFunction, Request, Response } from "express";

import moment from "moment";

const queryLogger = (req: Request, _: Response, next: NextFunction) => {
  process.env.CONSOLE_LOGGING === "true" &&
    console.info(
      `${req.protocol}://${req.get("host")}${
        req.originalUrl
      } ${moment().format()}`
    );

  next();
};
export default queryLogger;
