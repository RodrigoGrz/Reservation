import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAccommodationUseCase } from "./CreateAccommodationUseCase";

export class CreateAccommodationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, address, property_type, amount_per_night, host } = request.body;

        const createAccommodationUseCase = container.resolve(CreateAccommodationUseCase);

        await createAccommodationUseCase.execute({
            description,
            address,
            property_type,
            amount_per_night,
            host
        });

        return response.status(201).json({ message: `A acomodação foi criada com sucesso` });
    }
}