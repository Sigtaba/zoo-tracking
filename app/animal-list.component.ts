import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="emptyKegs">Empty Kegs</option>
    </select>
    <table>
      <tr *ngFor="let currentAnimal of childAnimalList | emptiness:filterByEmptiness">
        <td>{{currentAnimal.name}}</td>
        <td>{{currentAnimal.brand}}</td>
        <td>{{currentAnimal.price}}</td>
        <td>{{currentAnimal.abv}}</td>
        <td>{{currentAnimal.pints}}</td>
        <button (click)="subtractPints(childAnimalList.indexOf(currentAnimal), 1)">Pint Sold</button>
        <button (click)="subtractPints(childAnimalList.indexOf(currentAnimal), 2)">Growler Sold</button>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      </tr>
    </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByEmptiness: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  subtractPints(index, number){
    this.childAnimalList[index].pints -= number;
  }
}
