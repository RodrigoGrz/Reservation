import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPropertyTypesUseCase } from "./ListPropertyTypesUseCase";

export class ListPropertyTypesController {
    async handle(request: Request, response: Response) {
        const listPropertyTypesUseCase = container.resolve(ListPropertyTypesUseCase);

        const propertyTypes = await listPropertyTypesUseCase.execute();

        return response.json(propertyTypes);
    }
}