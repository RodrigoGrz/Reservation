import { container } from "tsyringe";

import { PropertyTypesRepository } from "../../modules/accommodations/repositories/implementations/PropertyTypesRepository";
import { IPropertyTypesRepository } from "../../modules/accommodations/repositories/IPropertyTypesRepository";

import { ICustomersRepository } from "../../modules/accounts/repositories/ICustomersRepository";
import { CustomersRepository } from "../../modules/accounts/repositories/implementations/CustomersRepository";

container.registerSingleton<IPropertyTypesRepository>(
    "PropertyTypesRepository",
    PropertyTypesRepository
);

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository",
    CustomersRepository
);