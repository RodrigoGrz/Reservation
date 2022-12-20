import { Router } from "express";
import { CreatePropertyTypeController } from "../modules/accommodations/useCases/createPropertyType/CreatePropertyTypeController";

const propertyTypeRouter = Router();

const createPropertyTypeController = new CreatePropertyTypeController();

propertyTypeRouter.post("/propertyType", createPropertyTypeController.handle);

export { propertyTypeRouter };