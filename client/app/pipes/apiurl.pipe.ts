import { Pipe, PipeTransform } from "@angular/core";
import { ConfigObject } from "../ConfigObject";

@Pipe({name: 'APIUrl'})
export class APIUrlPipe implements PipeTransform {
    transform(value: string, type: string):any {
        let file: string;
        if(!value) {
            return value;
        }

        if(type === 'file') {
            file = 'files/';
        } else if(type === 'image') {
            file = 'images/';
        }
        return ConfigObject.mediaBoxURL + file + value;
    }
}