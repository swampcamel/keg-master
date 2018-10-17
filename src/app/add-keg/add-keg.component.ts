import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Output() sendKeg = new EventEmitter();
  enterKeg(brewName: string, breweryName: string, abv: number, pintsRemaining: number, price: number) {
    let newKeg: Keg = new Keg(brewName, breweryName, abv, price, pintsRemaining);
    this.sendKeg.emit(newKeg);
  }


}
