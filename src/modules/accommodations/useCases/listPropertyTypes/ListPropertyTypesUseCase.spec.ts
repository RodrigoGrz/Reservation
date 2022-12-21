import { PropertyTypesRepositoryInMemory } from "../../repositories/in-memory/PropertyTypesRepositoryInMemory";
import { CreatePropertyTypesUseCase } from "../createPropertyType/CreatePropertyTypeUseCase";
import { ListPropertyTypesUseCase } from "./ListPropertyTypesUseCase";

let propertyTypesRepositoryInMemory: PropertyTypesRepositoryInMemory;
let createPropertyTypeUseCase: CreatePropertyTypesUseCase;
let listPropertyTypesUseCase: ListPropertyTypesUseCase;

describe("List all property types", () => {
    beforeEach(() => {
        propertyTypesRepositoryInMemory = new PropertyTypesRepositoryInMemory();
        createPropertyTypeUseCase = new CreatePropertyTypesUseCase(propertyTypesRepositoryInMemory);
        listPropertyTypesUseCase = new ListPropertyTypesUseCase(propertyTypesRepositoryInMemory);
    });

    it("should be able to list all property types", async () => {
        await createPropertyTypeUseCase.execute("Hotel");

        const allPropertyTypes = await listPropertyTypesUseCase.execute();

        expect(allPropertyTypes).toHaveLength(1);
    });
});