import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateHostDTO } from "../../dtos/ICreateHostDTO";
import { Host } from "../../entities/Host";
import { IHostsRepository } from "../../repositories/IHostsRepository";

@injectable()
export class CreateHostUseCase {
    constructor(
        @inject("HostsRepository")
        private hostsRepository: IHostsRepository
    ) {}

    async execute({ name, email, password }: ICreateHostDTO): Promise<Host> {
        const hostAlreadyExists = await this.hostsRepository.listByEmail(email);

        if(hostAlreadyExists) {
            throw new AppError("O anfitrião já está cadastrado", 409);
        }
        
        const passwordHash = await hash(password, 10);

        const host = await this.hostsRepository.create({
            name,
            email,
            password: passwordHash
        });

        return host;
    }
}