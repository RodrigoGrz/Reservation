import { inject, injectable } from "tsyringe";

import { Accommodation } from "../../entities/Accommodation";
import { IAccommodationsRepository } from "../../repositories/IAccommodationsRepository";

@injectable()
export class ListAccommodationsUseCase {
    constructor(
        @inject("AccommodationsRepository")
        private accommodationsRepository: IAccommodationsRepository
    ) {}

    async execute(): Promise<Accommodation[]> {
        const accommodations = await this.accommodationsRepository.listAll();

        return accommodations;
    }
}