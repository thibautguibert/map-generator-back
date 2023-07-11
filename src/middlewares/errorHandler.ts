import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { ErrorBase, ErrorName } from "../lib/customErrors";

export const errorHandler = (err: ErrorBase<ErrorName>, req: Request, res: Response, next: NextFunction): void => {
  console.log(`${err.name}: ${err.cause || err.message}`);

  res.status(err.status || 500);
  res.send({ name: err.name, message: err.message });
};

export const errorNotFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  next(createError(404));
};
