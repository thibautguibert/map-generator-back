import { Router } from "express";
import { getIndex } from "../controllers/index";
import mapRouter from "./mapRoutes";

export const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.use("/map", mapRouter);
