import { HostsRepositoryInMemory } from "../../repositories/in-memory/HostsRepositoryInMemory";
import { CreateHostUseCase } from "./CreateHostUseCase";

let hostsRepositoryInMemory: HostsRepositoryInMemory;
let createHostUseCase: CreateHostUseCase;

describe("Create Host", () => {
    beforeEach(() => {
        hostsRepositoryInMemory = new HostsRepositoryInMemory();
        createHostUseCase = new CreateHostUseCase(hostsRepositoryInMemory);
    });

    it("should be able to create a host", async () => {
        const host = {
            name: "Host name",
            email: "host@email.com",
            password: "12345678"
        }

        const hostCreated = await createHostUseCase.execute({
            name: host.name,
            email: host.email,
            password: host.password
        });

        expect(hostCreated).toHaveProperty("id");
    });

    it("should not be able to create a host that already exists", async () => {
        const host = {
            name: "Host name",
            email: "host@email.com",
            password: "12345678"
        }

        await createHostUseCase.execute({
            name: host.name,
            email: host.email,
            password: host.password
        });

        await expect(createHostUseCase.execute({
            name: host.name,
            email: host.email,
            password: host.password
        })).rejects.toThrow("O anfitrião já está cadastrado");
    });
});