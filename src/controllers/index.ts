import { Request, Response } from "express";

export const getIndex = async (req: Request, res: Response): Promise<void> => {
  res.status(200).send("Welcome to this map generation API!");
};
