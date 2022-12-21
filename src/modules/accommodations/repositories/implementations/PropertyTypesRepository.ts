import { prisma } from "../../../../shared/prisma";
import { PropertyType } from "../../entities/PropertyType";
import { IPropertyTypesRepository } from "../IPropertyTypesRepository";

export class PropertyTypesRepository implements IPropertyTypesRepository {
    async create(type: string): Promise<PropertyType> {
        const propertyType = await prisma.propertyTypes.create({
            data: {
                type
            }
        });

        return propertyType;
    }

    async listByType(type: string): Promise<PropertyType | null> {
        return await prisma.propertyTypes.findFirst({
            where: {
                type
            }
        });
    }

    async listAll(): Promise<PropertyType[]> {
        return await prisma.propertyTypes.findMany();
    }
    
}