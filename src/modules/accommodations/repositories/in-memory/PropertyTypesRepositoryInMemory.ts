import { PropertyType } from "../../entities/PropertyType";
import { IPropertyTypesRepository } from "../IPropertyTypesRepository";

export class PropertyTypesRepositoryInMemory implements IPropertyTypesRepository {
    private propertyTypes: PropertyType[] = [];
    
    async create(type: string): Promise<PropertyType> {
        const propertyType = new PropertyType();

        Object.assign(propertyType, {
            type
        });

        this.propertyTypes.push(propertyType);

        return propertyType;
    }

    async listByType(type: string): Promise<PropertyType | null> {
        const propertyType = this.propertyTypes.find(item => item.type === type);

        if(!propertyType) {
            return null;
        }

        return propertyType;
    }

    async listAll(): Promise<PropertyType[]> {
        return this.propertyTypes;
    }
    
}