import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
      <div class="container">
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.name}}</h3>
          <hr>
          <h3>Edit Animal</h3>
          <label>Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species" >
          <label>Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
          <label>Diet:</label>
          <input [(ngModel)]="childSelectedAnimal.diet">
          <label>Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <label>Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex">
          <label>Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.like">
          <label>Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislike">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
