import { Router } from "express";

import { customerRouter } from "./customers.routes";
import { hostRouter } from "./hosts.routes";
import { propertyTypeRouter } from "./propertyTypes.routes";

const router = Router();

router.use(propertyTypeRouter);
router.use(customerRouter);
router.use(hostRouter);

export { router };