import { inject, injectable } from "tsyringe";
import { PropertyType } from "../../entities/PropertyType";
import { IPropertyTypesRepository } from "../../repositories/IPropertyTypesRepository";

@injectable()
export class ListPropertyTypesUseCase {
    constructor(
        @inject("PropertyTypesRepository")
        private propertyTypesRepository: IPropertyTypesRepository
    ) {}

    async execute(): Promise<PropertyType[]> {
        const propertyTypes = await this.propertyTypesRepository.listAll();

        return propertyTypes;
    }
}