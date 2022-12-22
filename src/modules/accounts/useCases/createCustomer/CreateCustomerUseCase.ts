import { inject, injectable } from "tsyringe";

import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

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
            throw new Error("Esse cliente já existe");
        }

        const customer = await this.customersRepository.create({
            name,
            email,
            password
        });

        return customer;
    }
}