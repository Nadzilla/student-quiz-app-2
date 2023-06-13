import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToLetter'
})
export class ConvertToLetter implements PipeTransform{
    transform(value: number, ...args: any[]) {
        return String.fromCharCode(97 - 1 + value);
    }
}