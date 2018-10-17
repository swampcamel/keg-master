import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  kegs: Keg[] = [
    new Keg('Swivelhead Red', 'Deschutes Brewery', 6.5, 5, 6),
    new Keg('Total Domination IPA', 'Ninkasi Brewery', 8.7, 124, 4.2),
    new Keg('Rainier PCT IPA', 'Rainer Beer', 4.2, 124, 4)
  ];

  removePint(keg) {
    if (keg.pintsRemaining === 0) {
      alert("No more beer :(");
    } else if (keg.pintsRemaining === 1) {
      keg.pintsRemaining -= 1;
      keg.empty = true;
    } else {
      keg.pintsRemaining -= 1;
    }
  }

  colorPrice(keg) {
    const priceClass = "price";
    if (keg.pricePerPint == 4.2) {
      return "four-twenty " + priceClass;
    } else if (keg.pricePerPint > 5) {
      return "spendy " + priceClass;
    } else if (keg.pricePerPint <= 5 ) {
      return "cheap " + priceClass;
    } else {
      return "default";
    }
  }

  colorABV(keg) {
    const kegClass = "keg-style";
    if (keg.abv == 4.2) {
      return "bg-four-twenty " + kegClass;
    } else if (keg.abv >= 7.8) {
      return "bg-strong " + kegClass;
    } else if (keg.abv < 5 ) {
      return "bg-weak " + kegClass;
    } else {
      return "bg-average " + kegClass;
    }
  }

  ngOnInit() {
  }

}
