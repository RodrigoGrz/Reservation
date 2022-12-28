import { ICreateAccommodationDTO } from "../../dtos/ICreateAccommodationDTO";
import { Accommodation } from "../../entities/Accommodation";
import { IAccommodationsRepository } from "../IAccommodationsRepository";

export class AccommodationsRepositoryInMemory implements IAccommodationsRepository {
    private accommodations: Accommodation[] = [];

    async create({ description, address, property_type, amount_per_night, host }: ICreateAccommodationDTO): Promise<Accommodation> {
        const accommodation = new Accommodation();

        Object.assign(accommodation, {
            description,
            address,
            property_type,
            amount_per_night,
            host
        });

        this.accommodations.push(accommodation);

        return accommodation;
    }
    
    async listAll(): Promise<Accommodation[]> {
        const accommodations = this.accommodations;

        return accommodations;
    }
}