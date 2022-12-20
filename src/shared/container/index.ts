import { container } from "tsyringe";

import { PropertyTypesRepository } from "../../modules/accommodations/repositories/implementations/PropertyTypesRepository";
import { IPropertyTypesRepository } from "../../modules/accommodations/repositories/IPropertyTypesRepository";

container.registerSingleton<IPropertyTypesRepository>(
    "PropertyTypesRepository",
    PropertyTypesRepository
);