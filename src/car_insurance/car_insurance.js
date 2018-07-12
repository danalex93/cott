export default class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  
  updatePrice() {
    this.products.map(e => e.update());
    return this.products;
  }
}