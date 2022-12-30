import { ICreateReservationDTO } from "../../dtos/ICreateReservationDTO";
import { Reservation } from "../../entities/Reservation";
import { IReservationRepository } from "../IReservationsRepository";

export class ReservationsRepositoryInMemory implements IReservationRepository {
    private reservations: Reservation[] = [];
    
    async create({ accommodation, customer, check_in, check_out }: ICreateReservationDTO): Promise<Reservation> {
        const reservation = new Reservation();

        Object.assign(reservation, {
            accommodation,
            customer,
            check_in,
            check_out
        });

        this.reservations.push(reservation);

        return reservation;
    }
}