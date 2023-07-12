import express from "express";
import cors from "cors";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import { indexRouter } from "./routes/index";

export const app = express();
app.use(cors());
app.use(express.json());

// Express configuration
const PORT = process.env.PORT || 3005;
app.set("port", PORT);

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", indexRouter);

app.use(errorNotFoundHandler);
app.use(errorHandler);
