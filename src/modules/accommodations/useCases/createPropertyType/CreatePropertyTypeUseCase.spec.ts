import { AppError } from "../../../../shared/errors/AppError";
import { PropertyTypesRepositoryInMemory } from "../../repositories/in-memory/PropertyTypesRepositoryInMemory";
import { CreatePropertyTypesUseCase } from "./CreatePropertyTypeUseCase";

let propertyTypesRepository: PropertyTypesRepositoryInMemory;
let createPropertyTypeUseCase: CreatePropertyTypesUseCase;

describe("Create Property Type", () => {
    beforeEach(() => {
        propertyTypesRepository = new PropertyTypesRepositoryInMemory();
        createPropertyTypeUseCase = new CreatePropertyTypesUseCase(propertyTypesRepository);
    });

    it("should be able to create a property type", async () => {
        const propertyType = {
            type: "Hotel"
        }

        const propertTypeCreated = await createPropertyTypeUseCase.execute(propertyType.type);

        expect(propertTypeCreated).toHaveProperty("id");
    });

    it("should not be able to create a property type if that type already exists", async () => {
        const propertyType = {
            type: "Hotel"
        }

        await createPropertyTypeUseCase.execute(propertyType.type);

        await expect(createPropertyTypeUseCase.execute(propertyType.type))
            .rejects.toEqual(new AppError("Esse tipo de propriedade já existe!", 409));
    });
});