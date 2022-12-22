import { CustomersRepositoryInMemory } from "../../repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

let customersRepositoryInMemory: CustomersRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;

describe("Create Customer", () => {
    beforeEach(() => {
        customersRepositoryInMemory = new CustomersRepositoryInMemory();
        createCustomerUseCase = new CreateCustomerUseCase(customersRepositoryInMemory);
    });

    it("should be able to create a customer", async () => {
        const customer = {
            name: "Customer Name",
            email: "customer@email.com",
            password: "1234567"
        }

        const customerCreated = await createCustomerUseCase.execute({
            name: customer.name,
            email: customer.email,
            password: customer.password
        });

        expect(customerCreated).toHaveProperty("id");
    });

    it("should not be able to create a customer that already exists", async () => {
        const customer = {
            name: "Customer Name",
            email: "customer@email.com",
            password: "1234567"
        }

        await createCustomerUseCase.execute({
            name: customer.name,
            email: customer.email,
            password: customer.password
        });

        await expect(createCustomerUseCase.execute({
            name: customer.name,
            email: customer.email,
            password: customer.password
        })).rejects.toThrow(new Error("This customer already exists"));
    });
});