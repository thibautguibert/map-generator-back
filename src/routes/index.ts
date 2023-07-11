import { Router } from "express";
import { getIndex } from "../controllers/index";

export const indexRouter = Router();

indexRouter.get("/", getIndex);
