import { Binary } from "@angular/compiler";

export interface Image {
    id?: number;
    name: string;
    image: Binary;
    imagetype: string;
}