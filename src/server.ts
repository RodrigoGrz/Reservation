import "reflect-metadata";
import express from "express";

import "./shared/container";

import { propertyTypeRouter } from "./routes/propertyTypes.routes";

const app = express();

app.use(express.json());

app.use(propertyTypeRouter);

app.listen(3333, () => console.log("Server is running on PORT 3333"));