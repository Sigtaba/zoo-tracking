import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>Add a new animal</h1>
    <input #name type="text" />
    <input #brand type="text" />
    <input #price type="number" />
    <input #abv type="number" />
    <button (click)="addAnimal(name.value,brand.value,price.value,abv.value); name.value=''; brand.value=''; price.value=''; abv.value='';">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(name: string, brand: string, price: number, abv: number, pints: number) {
    var newAnimalToAdd: Animal = new Animal(name, brand, price, abv, pints);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
