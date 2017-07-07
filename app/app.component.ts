import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Zoo Tracking</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (soldPintsSender)="soldPints($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    `
})

export class AppComponent {

  masterAnimalList: Animal[] = [];
  selectedAnimal = null;
  pints = this.pints;

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
