import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="container">
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngAnimals">Animals 2 &amp; under yrs old</option>
        <option value="mediumAnimals">Animals 3 - 9 yrs old</option>
        <option value="oldAnimals">Animals 10 &amp; over yrs old</option>
      </select>
      <table>
        <tr>
          <td class="header">Species:</td>
          <td class="header">Name:</td>
          <td class="header">Age:</td>
          <td class="header">Diet:</td>
          <td class="header">Location in Zoo:</td>
          <td class="header">Caretakers:</td>
          <td class="header">Sex:</td>
          <td class="header">Likes:</td>
          <td class="header">Dislikes:</td>
          <td class="header">Edit:</td>
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
    </div>
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
