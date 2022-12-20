import { randomUUID as uuid } from "node:crypto";

export class PropertyType {
    id?: string;
    type?: string;
    created_at?: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}