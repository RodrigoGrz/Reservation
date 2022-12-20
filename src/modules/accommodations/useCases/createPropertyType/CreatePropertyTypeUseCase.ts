import { inject, injectable } from "tsyringe";

import { PropertyType } from "../../entities/PropertyType";
import { IPropertyTypesRepository } from "../../repositories/IPropertyTypesRepository";

@injectable()
export class CreatePropertyTypesUseCase {
    constructor(
        @inject("PropertyTypesRepository")
        private propertyTypesRepository: IPropertyTypesRepository
    ) {}

    async execute(type: string): Promise<PropertyType> {
        const propertyType = await this.propertyTypesRepository.create(type);

        return propertyType;
    }
}