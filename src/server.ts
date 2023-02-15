import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "./shared/container";
import { router } from "./routes";
import { AppError } from "./shared/errors/AppError";

const app = express();

app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }
});

app.listen(3333, () => console.log("Server is running on PORT 3333"));