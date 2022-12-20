import { PropertyType } from "../../entities/PropertyType";
import { IPropertyTypesRepository } from "../IPropertyTypesRepository";

export class PropertyTypesRepository implements IPropertyTypesRepository {
    private propertyTypes: PropertyType[] = [];
    
    async create(type: string): Promise<PropertyType> {
        const propertyType = new PropertyType();

        Object.assign(propertyType, {
            type
        });

        this.propertyTypes.push(propertyType);

        return propertyType;
    }
    
}