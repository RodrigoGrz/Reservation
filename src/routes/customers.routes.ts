import { Router } from "express";

import { CreateCustomerController } from "../modules/accounts/useCases/createCustomer/CreateCustomerController";

const customerRouter = Router();

const createCustomerController = new CreateCustomerController();

customerRouter.post("/customer", createCustomerController.handle);

export { customerRouter };