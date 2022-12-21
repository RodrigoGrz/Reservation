import { Router } from "express";
import { CreatePropertyTypeController } from "../modules/accommodations/useCases/createPropertyType/CreatePropertyTypeController";
import { ListPropertyTypesController } from "../modules/accommodations/useCases/listPropertyTypes/ListPropertyTypesController";

const propertyTypeRouter = Router();

const createPropertyTypeController = new CreatePropertyTypeController();
const listPropertyTypesController = new ListPropertyTypesController();

propertyTypeRouter.post("/propertyType", createPropertyTypeController.handle);
propertyTypeRouter.get("/propertyTypes", listPropertyTypesController.handle);

export { propertyTypeRouter };