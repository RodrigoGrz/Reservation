import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

        const customer = await createCustomerUseCase.execute({ name, email, password });

        return response.status(201).json({ message: `O cliente ${customer.name} foi criado com sucesso!` });
    }
}