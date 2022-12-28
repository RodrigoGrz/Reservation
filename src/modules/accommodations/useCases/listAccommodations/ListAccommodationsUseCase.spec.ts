import { HostsRepositoryInMemory } from "../../../accounts/repositories/in-memory/HostsRepositoryInMemory";
import { CreateHostUseCase } from "../../../accounts/useCases/createHost/CreateHostUseCase";
import { AccommodationsRepositoryInMemory } from "../../repositories/in-memory/AccommodationsRepositoryInMemory";
import { PropertyTypesRepositoryInMemory } from "../../repositories/in-memory/PropertyTypesRepositoryInMemory";
import { CreateAccommodationUseCase } from "../createAccommodation/CreateAccommodationUseCase";
import { CreatePropertyTypesUseCase } from "../createPropertyType/CreatePropertyTypeUseCase";
import { ListAccommodationsUseCase } from "./ListAccommodationsUseCase";

let accommodationsRepositoryInMemory: AccommodationsRepositoryInMemory;
let hostsRepositoryInMemory: HostsRepositoryInMemory;
let createHostUseCase: CreateHostUseCase;
let listAccommodationsUseCase: ListAccommodationsUseCase;
let propertyTypesRepositoryInMemory: PropertyTypesRepositoryInMemory;
let createPropertyTypeUseCase: CreatePropertyTypesUseCase;
let createAccommodationUseCase: CreateAccommodationUseCase;

describe("List accommodations", () => {
    beforeEach(() => {
        hostsRepositoryInMemory = new HostsRepositoryInMemory();
        createHostUseCase = new CreateHostUseCase(hostsRepositoryInMemory);
        propertyTypesRepositoryInMemory = new PropertyTypesRepositoryInMemory();
        createPropertyTypeUseCase = new CreatePropertyTypesUseCase(propertyTypesRepositoryInMemory);
        accommodationsRepositoryInMemory = new AccommodationsRepositoryInMemory();
        createAccommodationUseCase = new CreateAccommodationUseCase(accommodationsRepositoryInMemory);
        listAccommodationsUseCase = new ListAccommodationsUseCase(accommodationsRepositoryInMemory);
    });

    it("should be able to list accommodations", async () => {
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

        await createAccommodationUseCase.execute({
            description: accommodation.description,
            address: accommodation.address,
            property_type: accommodation.property_type,
            amount_per_night: accommodation.amount_per_night,
            host: accommodation.host
        });

        const listAccommodations = await listAccommodationsUseCase.execute();
        
        expect(listAccommodations).toHaveLength(1);
    });
});