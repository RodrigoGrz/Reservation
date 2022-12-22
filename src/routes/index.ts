import { Router } from "express";

import { customerRouter } from "./customers.routes";
import { propertyTypeRouter } from "./propertyTypes.routes";

const router = Router();

router.use(propertyTypeRouter);
router.use(customerRouter);

export { router };