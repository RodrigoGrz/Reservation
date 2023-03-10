import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
export class CreateCustomerUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) {}

    async execute({ name, email, password }: IRequest): Promise<Customer> {
        const customerAlreadyExists = await this.customersRepository.listByEmail(email);

        if(customerAlreadyExists) {
            throw new AppError("Esse cliente já existe", 409);
        }

        const passwordHash = await hash(password, 10);

        const customer = await this.customersRepository.create({
            name,
            email,
            password: passwordHash
        });

        return customer;
    }
}