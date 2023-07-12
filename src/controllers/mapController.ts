import { NextFunction, Request, Response } from "express";
import { MapConfig, generateMap } from "../models/map";
import { InvalidMapConfigError } from "../lib/customErrors";
import { isMapConfig } from "../lib/typeGuards";

export const createRandomMap = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (!isMapConfig(req.body)) {
    // TODO: specify which field is invalid
    next(new InvalidMapConfigError({ message: "Request body is not a valid map config" }));
    return;
  }

  try {
    const mapConfig: MapConfig = req.body;
    const randomMap = await generateMap(mapConfig);
    res.status(200).send(randomMap);
  } catch (error) {
    next(error);
  }
};
