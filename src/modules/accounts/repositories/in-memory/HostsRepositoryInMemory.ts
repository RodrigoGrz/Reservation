import { ICreateHostDTO } from "../../dtos/ICreateHostDTO";
import { Host } from "../../entities/Host";
import { IHostsRepository } from "../IHostsRepository";

export class HostsRepositoryInMemory implements IHostsRepository {
    private hosts: Host[] = [];
    
    async create({ name, email, password }: ICreateHostDTO): Promise<Host> {
        const host = new Host();

        Object.assign(host, {
            name,
            email,
            password
        });

        this.hosts.push(host);

        return host;
    }

    async listByEmail(email: string): Promise<Host | null> {
        const host = this.hosts.find(item => item.email === email);

        if(!host) {
            return null;
        }

        return host;
    }
    
}