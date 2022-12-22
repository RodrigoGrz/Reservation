import { Customer } from "../../entities/Customer";
import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "../ICustomersRepository";
import { prisma } from "../../../../shared/prisma";

export class CustomersRepository implements ICustomersRepository {
    async create({ name, email, password }: ICreateCustomerDTO): Promise<Customer> {
        const customer = await prisma.customer.create({
            data: {
                name,
                email,
                password
            }
        });

        return customer;
    }

    async listByEmail(email: string): Promise<Customer | null> {
        const customer = await prisma.customer.findFirst({
            where: {
                email
            }
        });

        return customer;
    }
    
}