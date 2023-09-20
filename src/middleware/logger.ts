import { RequestHandler } from "express";

const logger: RequestHandler = (req, res, next) => {
  // tslint:disable-next-line:no-console
  console.log(req.url);
  // tslint:disable-next-line:no-console
  console.log(req.params);
  // tslint:disable-next-line:no-console
  console.log(req.query);
  next();
};

export { logger };
