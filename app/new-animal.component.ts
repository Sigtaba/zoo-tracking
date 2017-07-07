import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="container">
    <h1>Add a new animal</h1>
      <input #species type="text" placeholder="Species"/>
      <input #name type="text" placeholder="Name"/>
      <input #age type="number" placeholder="Age"/>
      <input #sex type="text" placeholder="Sex"/>
      <input #diet type="text" placeholder="Diet"/>
      <input #location type="text" placeholder="Location in Zoo"/>
      <input #caretakers type="number" placeholder="Amount of Caretakers"/>
      <input #like type=text placeholder="Likes"/>
      <input #dislike type="text" placeholder="Dislikes"/>
    </div>
    <button (click)="addAnimal(species.value,name.value,age.value,diet.value,location.value,caretakers.value,sex.value,like.value,dislike.value); name.value=''; species.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; like.value=''; dislike.value='';" id="bottom-button">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(species:string, name: string, age: number, diet: string, location:string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
