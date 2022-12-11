import { Character } from "./Character";

export interface Results {
    count: number,
    next: string,
    previous: string,
    results: Character[] 
}
