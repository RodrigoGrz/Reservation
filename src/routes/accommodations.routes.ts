import { Router } from "express";

import { CreateAccommodationController } from "../modules/accommodations/useCases/createAccommodation/CreateAccommodationController";
import { ListAccommodationsController } from "../modules/accommodations/useCases/listAccommodations/ListAccommodationsController";

const accommodationsRouter = Router();

const createAccommodationController = new CreateAccommodationController();
const listAccommodationsController = new ListAccommodationsController();

accommodationsRouter.post("/accommodation", createAccommodationController.handle);
accommodationsRouter.get("/accommodations", listAccommodationsController.handle);

export { accommodationsRouter };