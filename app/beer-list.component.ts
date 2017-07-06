import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="emptyKegs">Empty Kegs</option>
    </select>
    <table>
      <tr *ngFor="let currentBeer of childBeerList | emptiness:filterByEmptiness">
        <td>{{currentBeer.name}}</td>
        <td>{{currentBeer.brand}}</td>
        <td>{{currentBeer.price}}</td>
        <td>{{currentBeer.abv}}</td>
        <td>{{currentBeer.pints}}</td>
        <button (click)="subtractPints(childBeerList.indexOf(currentBeer), 1)">Pint Sold</button>
        <button (click)="subtractPints(childBeerList.indexOf(currentBeer), 2)">Growler Sold</button>
        <button (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>
      </tr>
    </table>
  `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  filterByEmptiness: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }

  subtractPints(index, number){
    this.childBeerList[index].pints -= number;
  }
}
