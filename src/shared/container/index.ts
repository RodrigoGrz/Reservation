import { container } from "tsyringe";

import { IAccommodationsRepository } from "../../modules/accommodations/repositories/IAccommodationsRepository";
import { AccommodationsRepository } from "../../modules/accommodations/repositories/implementations/AccommodationsRepository";

import { PropertyTypesRepository } from "../../modules/accommodations/repositories/implementations/PropertyTypesRepository";
import { IPropertyTypesRepository } from "../../modules/accommodations/repositories/IPropertyTypesRepository";

import { ICustomersRepository } from "../../modules/accounts/repositories/ICustomersRepository";
import { IHostsRepository } from "../../modules/accounts/repositories/IHostsRepository";

import { CustomersRepository } from "../../modules/accounts/repositories/implementations/CustomersRepository";
import { HostsRepository } from "../../modules/accounts/repositories/implementations/HostsRepository";

import { ReservationsRepository } from "../../modules/reservations/repositories/implementations/ReservationsRepository";
import { IReservationRepository } from "../../modules/reservations/repositories/IReservationsRepository";

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

container.registerSingleton<IAccommodationsRepository>(
    "AccommodationsRepository",
    AccommodationsRepository
);

container.registerSingleton<IReservationRepository>(
    "ReservationsRepository",
    ReservationsRepository
);