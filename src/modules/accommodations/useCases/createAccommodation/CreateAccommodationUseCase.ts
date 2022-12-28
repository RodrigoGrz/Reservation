import { inject, injectable } from "tsyringe";

import { ICreateAccommodationDTO } from "../../dtos/ICreateAccommodationDTO";
import { Accommodation } from "../../entities/Accommodation";
import { IAccommodationsRepository } from "../../repositories/IAccommodationsRepository";

@injectable()
export class CreateAccommodationUseCase {
    constructor(
        @inject("AccommodationsRepository")
        private accommodationsRepository: IAccommodationsRepository
    ) {}

    async execute({ description, address, property_type, amount_per_night, host }: ICreateAccommodationDTO): Promise<Accommodation> {
        const accommodation = await this.accommodationsRepository.create({
            description,
            address,
            property_type,
            amount_per_night,
            host
        });

        return accommodation;
    }
}