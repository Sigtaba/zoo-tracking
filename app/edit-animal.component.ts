import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
      <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.name}}</h3>
          <hr>
          <h3>Edit Animal</h3>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Enter Animal Brand:</label>
          <input [(ngModel)]="childSelectedAnimal.brand">
          <label>Enter Animal Price:</label>
          <input [(ngModel)]="childSelectedAnimal.price">
          <label>Enter Animal ABV:</label>
          <input [(ngModel)]="childSelectedAnimal.abv">
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
