import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAccommodationsUseCase } from "./ListAccommodationsUseCase";

export class ListAccommodationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAccommodationsUseCase = container.resolve(ListAccommodationsUseCase);

        const accommodations = await listAccommodationsUseCase.execute();

        return response.json(accommodations);
    }
}