import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateHostUseCase } from "./CreateHostUseCase";

export class CreateHostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createHostUseCase = container.resolve(CreateHostUseCase);

        const host = await createHostUseCase.execute({ name, email, password });

        return response.status(201).json({ message: `O anfitrião ${host.name} foi criado com sucesso` });
    }
}