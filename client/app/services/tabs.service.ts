import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class TabsService {
    public emitter: EventEmitter<any> = new EventEmitter();

    constructor(

    ) {

    }

    public emitTab(tab):void {
        this.emitter.emit(tab);
    }
}