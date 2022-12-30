import { prisma } from "../../../../shared/prisma";
import { ICreateReservationDTO } from "../../dtos/ICreateReservationDTO";
import { Reservation } from "../../entities/Reservation";
import { IReservationRepository } from "../IReservationsRepository";

export class ReservationsRepository implements IReservationRepository {
    async create({ accommodation, customer, check_in, check_out }: ICreateReservationDTO): Promise<Reservation> {
        const reservation = await prisma.reservation.create({
            data: {
                accommodation,
                customer,
                check_in,
                check_out
            }
        });

        return reservation;
    }
    
}