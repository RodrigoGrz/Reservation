import { Customer } from "../entities/Customer";
import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";

export interface ICustomersRepository {
    create(data: ICreateCustomerDTO): Promise<Customer>;
    listByEmail(email: string): Promise<Customer | null>;
}