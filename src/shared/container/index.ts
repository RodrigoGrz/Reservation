import { container } from "tsyringe";

import { PropertyTypesRepository } from "../../modules/accommodations/repositories/implementations/PropertyTypesRepository";
import { IPropertyTypesRepository } from "../../modules/accommodations/repositories/IPropertyTypesRepository";

import { ICustomersRepository } from "../../modules/accounts/repositories/ICustomersRepository";
import { IHostsRepository } from "../../modules/accounts/repositories/IHostsRepository";

import { CustomersRepository } from "../../modules/accounts/repositories/implementations/CustomersRepository";
import { HostsRepository } from "../../modules/accounts/repositories/implementations/HostsRepository";

container.registerSingleton<IPropertyTypesRepository>(
    "PropertyTypesRepository",
    PropertyTypesRepository
);

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository",
    CustomersRepository
);

container.registerSingleton<IHostsRepository>(
    "HostsRepository",
    HostsRepository
);