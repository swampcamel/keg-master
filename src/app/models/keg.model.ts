export class Keg {
  public empty: boolean = false;
  public displayPrice: string = '';
  constructor(public brewName: string, public breweryName: string, public abv: number, public pintsRemaining: number, public pricePerPint: number) {
    this.displayPrice = parseFloat(this.pricePerPint).toFixed(2);
  }
}
