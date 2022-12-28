import { randomUUID as uuid } from "node:crypto";

export class Accommodation {
    id?: string;
    description?: string;
    address?: string;
    property_type?: string;
    amount_per_night?: number;
    host?: string;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}