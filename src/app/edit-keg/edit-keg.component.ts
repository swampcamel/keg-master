import { Component, Input, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {

  @Input() selectedKeg: Keg;

  @Input() editKegList: Keg[];


  selectKeg(keg: Keg): void {
    this.selectedKeg = keg;
  }

  ngOnInit() {  }
  ngDoCheck(this.selectedKeg) {
    if(this.selectedKeg.pricePerPint != parseFloat(this.selectedKeg.displayPrice)) {
      this.selectedKeg.displayPrice = parseFloat(this.selectedKeg.pricePerPint).toFixed(2);

    }
    if(this.selectedKeg.pintsRemaining !== 0) {
      this.selectedKeg.empty = false;
    } else if (this.selectedKeg.pintsRemaining == 0) {
      this.selectedKeg.empty = true;
    }
  }
}
