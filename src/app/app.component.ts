import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Keg Master';
  kegs: Keg[] = [
    new Keg('Swivelhead Red', 'Deschutes Brewery', 6.5, 5, 6),
    new Keg('Total Domination IPA', 'Ninkasi Brewery', 8.7, 124, 4.2),
    new Keg('Rainier PCT IPA', 'Rainer Beer', 4.2, 124, 4)
  ];

  addKeg(newKeg: Keg) {
      this.kegs.push(newKeg);
  }


}
