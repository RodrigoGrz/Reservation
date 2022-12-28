import { Router } from "express";

import { accommodationsRouter } from "./accommodations.routes";
import { customerRouter } from "./customers.routes";
import { hostRouter } from "./hosts.routes";
import { propertyTypeRouter } from "./propertyTypes.routes";

const router = Router();

router.use(propertyTypeRouter);
router.use(customerRouter);
router.use(hostRouter);
router.use(accommodationsRouter);

export { router };