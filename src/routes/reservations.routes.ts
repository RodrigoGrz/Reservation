import { Router } from "express";

import { CreateReservationController } from "../modules/reservations/useCases/createReservation/CreateReservationController";

const reservationsRouter = Router();

const createReservationController = new CreateReservationController();

reservationsRouter.post("/reservation", createReservationController.handle);

export { reservationsRouter };