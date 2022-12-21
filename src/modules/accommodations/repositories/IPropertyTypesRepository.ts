import { PropertyType } from "../entities/PropertyType";

export interface IPropertyTypesRepository {
    create(type: string): Promise<PropertyType>;
    listByType(type: string): Promise<PropertyType | null>;
    listAll(): Promise<PropertyType[]>;
}