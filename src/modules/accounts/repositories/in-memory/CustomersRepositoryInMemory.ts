import { Customer } from "../../entities/Customer";
import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "../ICustomersRepository";

export class CustomersRepositoryInMemory implements ICustomersRepository {
    private customers: Customer[] = [];
    
    async create({ name, email, password }: ICreateCustomerDTO): Promise<Customer> {
        const customer = new Customer();

        Object.assign(customer, {
            name,
            email,
            password
        });

        this.customers.push(customer);

        return customer;
    }

    async listByEmail(email: string): Promise<Customer | null> {
        const customer = this.customers.find(item => item.email === email);

        if(!customer) {
            return null;
        }

        return customer;
    }
    
}