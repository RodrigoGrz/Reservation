import { randomUUID as uuid } from "node:crypto";

export class Reservation {
    id?: string;
    accommodation?: string;
    customer?: string;
    check_in?: Date;
    check_out?: Date;
    created_at?: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}