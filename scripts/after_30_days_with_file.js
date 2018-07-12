import fs from 'fs';
import Product from "../src/product/product";
import CarInsurance from "../src/car_insurance/car_insurance";

const productsAtDayZero = [
  new Product("Medium Coverage", 10, 20),
  new Product("Full Coverage", 2, 0),
  new Product("Low Coverage", 5, 7),
  new Product("Mega Coverage", 0, 80),
  new Product("Mega Coverage", -1, 80),
  new Product("Special Full Coverage", 15, 20),
  new Product("Special Full Coverage", 10, 49),
  new Product("Special Full Coverage", 5, 49),
  new Product("Super Sale", 3, 6)
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = product => `${product.name}, ${product.sellIn}, ${product.price}`;

let text = "";
for (let i = 1; i <= 30; i += 1) {
  text += `Day ${i}\n`;
  text += "name, sellIn, price\n";
  carInsurance.updatePrice()
  carInsurance.products.map((p) => {
    text += productPrinter(p) + "\n";
  });
  text += "\n";
}

fs.writeFile("./products_after_30_days.txt", text, (error) => {
  if (error)
    console.log(error);
});