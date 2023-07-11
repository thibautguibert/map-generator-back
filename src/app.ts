import express from "express";
import logger from "morgan";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { indexRouter } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
const PORT = process.env.PORT || 3005;
app.set("port", PORT);

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", indexRouter);

app.use(errorNotFoundHandler);
app.use(errorHandler);
