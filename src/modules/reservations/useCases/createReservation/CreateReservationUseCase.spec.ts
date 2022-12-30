import { AccommodationsRepositoryInMemory } from "../../../accommodations/repositories/in-memory/AccommodationsRepositoryInMemory";
import { PropertyTypesRepositoryInMemory } from "../../../accommodations/repositories/in-memory/PropertyTypesRepositoryInMemory";
import { CreateAccommodationUseCase } from "../../../accommodations/useCases/createAccommodation/CreateAccommodationUseCase";
import { CreatePropertyTypesUseCase } from "../../../accommodations/useCases/createPropertyType/CreatePropertyTypeUseCase";
import { CustomersRepositoryInMemory } from "../../../accounts/repositories/in-memory/CustomersRepositoryInMemory";
import { HostsRepositoryInMemory } from "../../../accounts/repositories/in-memory/HostsRepositoryInMemory";
import { CreateCustomerUseCase } from "../../../accounts/useCases/createCustomer/CreateCustomerUseCase";
import { CreateHostUseCase } from "../../../accounts/useCases/createHost/CreateHostUseCase";
import { ReservationsRepositoryInMemory } from "../../repositories/in-memory/ReservationsRepositoryInMemory";
import { CreateReservationUseCase } from "./CreateReservationUseCase";

let reservationsRepositoryInMemory: ReservationsRepositoryInMemory;
let createReservationUseCase: CreateReservationUseCase;
let accommodationsRepositoryInMemory: AccommodationsRepositoryInMemory;
let hostsRepositoryInMemory: HostsRepositoryInMemory;
let createHostUseCase: CreateHostUseCase;
let propertyTypesRepositoryInMemory: PropertyTypesRepositoryInMemory;
let createPropertyTypeUseCase: CreatePropertyTypesUseCase;
let createAccommodationUseCase: CreateAccommodationUseCase;
let customersRepositoryInMemory: CustomersRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;

describe("Create reservation", () => {
    beforeEach(() => {
        hostsRepositoryInMemory = new HostsRepositoryInMemory();
        createHostUseCase = new CreateHostUseCase(hostsRepositoryInMemory);
        propertyTypesRepositoryInMemory = new PropertyTypesRepositoryInMemory();
        createPropertyTypeUseCase = new CreatePropertyTypesUseCase(propertyTypesRepositoryInMemory);
        accommodationsRepositoryInMemory = new AccommodationsRepositoryInMemory();
        createAccommodationUseCase = new CreateAccommodationUseCase(accommodationsRepositoryInMemory);
        customersRepositoryInMemory = new CustomersRepositoryInMemory();
        createCustomerUseCase = new CreateCustomerUseCase(customersRepositoryInMemory);
        reservationsRepositoryInMemory = new ReservationsRepositoryInMemory();
        createReservationUseCase = new CreateReservationUseCase(reservationsRepositoryInMemory);
    });

    it("should be able to create a reservation", async () => {
        const host = {
            name: "Host name",
            email: "host@email.com",
            password: "12345678"
        }

        const hostCreated = await createHostUseCase.execute({
            name: host.name,
            email: host.email,
            password: host.password
        });

        const propertyType = await createPropertyTypeUseCase.execute("Hotel");

        const accommodation = {
            description: "Hotel 5 estrelas",
            address: "São Paulo",
            property_type: propertyType.id!,
            amount_per_night: 1000,
            host: hostCreated.id!
        }

        const accommodationCreated = await createAccommodationUseCase.execute({
            description: accommodation.description,
            address: accommodation.address,
            property_type: accommodation.property_type,
            amount_per_night: accommodation.amount_per_night,
            host: accommodation.host
        });

        const customer = {
            name: "Customer name",
            email: "customer@email.com",
            password: "12345678"
        }

        const customerCreated = await createCustomerUseCase.execute({
            name: customer.name,
            email: customer.email,
            password: customer.password
        });

        const reservation = {
            accommodation: accommodationCreated.id!,
            customer: customerCreated.id!,
            check_in: "2022-12-25 12:30:00.716",
            check_out: "2022-12-30 15:30:23.716"
        }

        const reservationCreated = await createReservationUseCase.execute({
            accommodation: reservation.accommodation,
            customer: reservation.customer,
            check_in: reservation.check_in,
            check_out: reservation.check_out
        });

        expect(reservationCreated).toHaveProperty("id");
    });

    it("should not be able to create a reservation that check in is after check out", async () => {
        const host = {
            name: "Host name",
            email: "host@email.com",
            password: "12345678"
        }

        const hostCreated = await createHostUseCase.execute({
            name: host.name,
            email: host.email,
            password: host.password
        });

        const propertyType = await createPropertyTypeUseCase.execute("Hotel");

        const accommodation = {
            description: "Hotel 5 estrelas",
            address: "São Paulo",
            property_type: propertyType.id!,
            amount_per_night: 1000,
            host: hostCreated.id!
        }

        const accommodationCreated = await createAccommodationUseCase.execute({
            description: accommodation.description,
            address: accommodation.address,
            property_type: accommodation.property_type,
            amount_per_night: accommodation.amount_per_night,
            host: accommodation.host
        });

        const customer = {
            name: "Customer name",
            email: "customer@email.com",
            password: "12345678"
        }

        const customerCreated = await createCustomerUseCase.execute({
            name: customer.name,
            email: customer.email,
            password: customer.password
        });

        const reservation = {
            accommodation: accommodationCreated.id!,
            customer: customerCreated.id!,
            check_in: "2022-12-30 12:30:00.716",
            check_out: "2022-12-25 15:30:23.716"
        }

        await expect(createReservationUseCase.execute({
            accommodation: reservation.accommodation,
            customer: reservation.customer,
            check_in: reservation.check_in,
            check_out: reservation.check_out
        })).rejects.toThrow(new Error("A data do check in deve ser antes da data do check out"));
    });
});