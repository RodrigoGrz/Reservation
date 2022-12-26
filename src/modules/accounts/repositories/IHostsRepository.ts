import { Host } from "../entities/Host";
import { ICreateHostDTO } from "../dtos/ICreateHostDTO";

export interface IHostsRepository {
    create(data: ICreateHostDTO): Promise<Host>;
    listByEmail(email: string): Promise<Host | null>;
}