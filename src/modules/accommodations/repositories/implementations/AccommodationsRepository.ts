import { prisma } from "../../../../shared/prisma";

import { ICreateAccommodationDTO } from "../../dtos/ICreateAccommodationDTO";
import { Accommodation } from "../../entities/Accommodation";
import { IAccommodationsRepository } from "../IAccommodationsRepository";

export class AccommodationsRepository implements IAccommodationsRepository {
    async create({ description, address, property_type, amount_per_night, host }: ICreateAccommodationDTO): Promise<Accommodation> {
        const accommodation = await prisma.accommodation.create({
            data: {
                description,
                address,
                property_type,
                amount_per_night,
                host
            }
        });

        return accommodation;
    }

    async listAll(): Promise<Accommodation[]> {
        const accommodations = await prisma.accommodation.findMany({
            select: {
                description: true,
                address: true,
                propertyTypeId: {
                    select: {
                        type: true
                    }
                },
                amount_per_night: true,
                hostId: {
                    select: {
                        name: true,
                        email: true,
                        password: false
                    }
                },
                created_at: true
            }
        });

        return accommodations;
    }
}