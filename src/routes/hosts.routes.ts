import { Router } from "express";

import { CreateHostController } from "../modules/accounts/useCases/createHost/CreateHostController";

const hostRouter = Router();

const createHostController = new CreateHostController();

hostRouter.post("/host", createHostController.handle);

export { hostRouter };