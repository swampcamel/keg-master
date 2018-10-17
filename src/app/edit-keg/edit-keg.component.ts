import { Component, Input, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {

  selectedKeg: Keg;

  @Input() editKegList: Keg[];


  selectKeg(keg: Keg): void {
    this.selectedKeg = keg;
  }

  ngOnInit() {  }

}
