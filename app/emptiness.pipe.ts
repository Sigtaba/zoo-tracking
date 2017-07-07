import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {


  transform(input: Animal[], desiredEmptiness) {
    var output: Animal[] = [];

    if(desiredEmptiness === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
