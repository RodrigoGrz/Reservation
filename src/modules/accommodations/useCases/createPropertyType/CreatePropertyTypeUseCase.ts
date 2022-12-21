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
        const propertyTypeAlreadyExists = await this.propertyTypesRepository.listByType(type);

        if(propertyTypeAlreadyExists) {
            throw new Error("Esse tipo de propriedade já existe!");
        }

        const propertyType = await this.propertyTypesRepository.create(type);

        return propertyType;
    }
}