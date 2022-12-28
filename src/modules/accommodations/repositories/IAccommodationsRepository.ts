import { ICreateAccommodationDTO } from "../dtos/ICreateAccommodationDTO";
import { Accommodation } from "../entities/Accommodation";

export interface IAccommodationsRepository {
    create(data: ICreateAccommodationDTO): Promise<Accommodation>;
}