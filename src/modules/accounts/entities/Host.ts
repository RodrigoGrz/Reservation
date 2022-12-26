import { randomUUID as uuid } from "node:crypto";

export class Host {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    created_at?: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}