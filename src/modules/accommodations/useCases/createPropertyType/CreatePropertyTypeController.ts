import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePropertyTypesUseCase } from "./CreatePropertyTypeUseCase";

export class CreatePropertyTypeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { type } = request.body;

        const createPropertyType = container.resolve(CreatePropertyTypesUseCase);
        
        const propertyType = await createPropertyType.execute(type);

        return response.status(201).json({ message: `O tipo de propriedade ${propertyType.type} foi criado com sucesso!` });
    }
}