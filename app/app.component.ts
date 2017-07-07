import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
    <h1 id="title">Zoo Tracker</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
    `
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Donkey', 'Vance', 3, 'Hay', 'Barnyard', 2, 'Male', 'Kicking people', 'Being brushed'),
    new Animal('Leopard', 'Allison', 7, 'Rats', 'Jungle', 6, 'Female', 'Being petted', 'Bath time'),
    new Animal('Penguin', 'Quentin', 12, 'Fish', 'Polar', 1, 'Male', 'Swimming around', 'Waiting for food'),
    new Animal('Otter', 'Ottowa', 1, 'Fish', 'River', 1, 'Female', 'Belly rubs', 'Bedtime'),
  ];
  selectedAnimal = null;
  age = this.age;

  finishedEditing() {
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
