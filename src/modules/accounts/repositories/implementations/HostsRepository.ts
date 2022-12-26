import { prisma } from "../../../../shared/prisma";
import { ICreateHostDTO } from "../../dtos/ICreateHostDTO";
import { Host } from "../../entities/Host";
import { IHostsRepository } from "../IHostsRepository";

export class HostsRepository implements IHostsRepository {
    async create({ name, email, password }: ICreateHostDTO): Promise<Host> {
        const host = await prisma.hosting.create({
            data: {
                name,
                email,
                password
            }
        });

        return host;
    }

    async listByEmail(email: string): Promise<Host | null> {
        const host = await prisma.hosting.findFirst({
            where: {
                email
            }
        });

        return host;
    }
    
}