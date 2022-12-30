import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReservationUseCase } from "./CreateReservationUseCase";

export class CreateReservationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { accommodation, customer, check_in, check_out } = request.body;

        const createReservationUseCase = container.resolve(CreateReservationUseCase);

        await createReservationUseCase.execute({
            accommodation,
            customer,
            check_in,
            check_out
        });

        return response.status(201).json({ message: "A reserva foi feita com sucesso" });
    }
}