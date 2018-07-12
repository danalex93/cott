export default class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  update(){
    this.sellIn--;

    switch (this.name) {
      case "Mega Coverage":
        return;
      case "Full Coverage":
        if (this.price < 50) this.price++;
        return;
      case "Special Full Coverage":
        if (this.sellIn === 0) this.price = 0;
        else if (this.sellIn <= 5) this.price += 3;
        else if (this.sellIn <= 10 && this.sellIn > 5) this.price += 2;
        else this.price++;
        return;
      case "Super Sale":
        if (this.price > 1) this.price -= 2;
        else this.price = 0;
        return;
      default:
        if (this.price > 0) this.price--;
    }
  }
}