import { PropertyType } from "../entities/PropertyType";

export interface IPropertyTypesRepository {
    create(type: string): Promise<PropertyType>;
}