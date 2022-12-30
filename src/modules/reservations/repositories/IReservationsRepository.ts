import { ICreateReservationDTO } from "../dtos/ICreateReservationDTO";
import { Reservation } from "../entities/Reservation";

export interface IReservationRepository {
    create(data: ICreateReservationDTO): Promise<Reservation>;
}