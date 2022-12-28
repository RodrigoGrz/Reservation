import { Router } from "express";

import { CreateAccommodationController } from "../modules/accommodations/useCases/createAccommodation/CreateAccommodationController";

const accommodationsRouter = Router();

const createAccommodationController = new CreateAccommodationController();

accommodationsRouter.post("/accommodation", createAccommodationController.handle);

export { accommodationsRouter };