import { Router } from "express";
import { createRandomMap } from "../controllers/mapController";

const mapRouter = Router();

mapRouter.post("/random", createRandomMap);

export default mapRouter;
