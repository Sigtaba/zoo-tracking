import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Animals under 2 yrsc old</option>
      <option value="mediumAnimals">Animals 3 - 9 yrs old</option>
      <option value="oldAnimals">Animals over 10 yrs old</option>
    </select>
    <table>
      <tr>
        <td>Species:</td>
        <td>Name:</td>
        <td>Age:</td>
        <td>Diet:</td>
        <td>Location in Zoo:</td>
        <td>Caretakers:</td>
        <td>Sex:</td>
        <td>Likes:</td>
        <td>Dislikes:</td>
        <td>Edit:</td>
      </tr>
      <tr *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
        <td>{{currentAnimal.species}}</td>
        <td>{{currentAnimal.name}}</td>
        <td>{{currentAnimal.age}}</td>
        <td>{{currentAnimal.diet}}</td>
        <td>{{currentAnimal.location}}</td>
        <td>{{currentAnimal.caretakers}}</td>
        <td>{{currentAnimal.sex}}</td>
        <td>{{currentAnimal.like}}</td>
        <td>{{currentAnimal.dislike}}</td>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      </tr>
    </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
