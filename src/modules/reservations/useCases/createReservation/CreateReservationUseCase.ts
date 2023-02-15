import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { Reservation } from "../../entities/Reservation";
import { IReservationRepository } from "../../repositories/IReservationsRepository";

interface IRequest {
    accommodation: string;
    customer: string;
    check_in: string;
    check_out: string;
}

@injectable()
export class CreateReservationUseCase {
    constructor(
        @inject("ReservationsRepository")
        private reservationsRepository: IReservationRepository
    ) {}

    async execute({ accommodation, customer, check_in, check_out }: IRequest): Promise<Reservation> {        
        if(Date.parse(check_in) > Date.parse(check_out)) {
            throw new AppError("A data do check in deve ser antes da data do check out", 409);
        }

        const reservation = await this.reservationsRepository.create({
            accommodation,
            customer,
            check_in: new Date(check_in),
            check_out: new Date(check_out)
        });

        return reservation;
    }
}