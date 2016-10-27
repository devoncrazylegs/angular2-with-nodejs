import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class GlobalEventsManager {
    public showNavBar: EventEmitter<boolean> = new EventEmitter();

    constructor() {

    }
}