import { expect, should } from 'chai';

import CarInsurance from './car_insurance.js';
import Product from '../product/product';

describe("CarInsurance", () => {
  let products;
  let car_insurance_products;
  let car_insurance;
  beforeEach(() => {
    products = [
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ];

    car_insurance_products = [
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ];

    car_insurance  = new CarInsurance(car_insurance_products);
  })

  it("should be able to be created without products when no arguments are passed", () => {
    let car_insurance = new CarInsurance();
    expect(car_insurance.products).to.be.empty;
  })

  it("should degrade days of each product when updating prices", () => {
    car_insurance.updatePrice();
    products.map(e => e.update())
    expect(car_insurance.products.map(e => e.sellIn)).to.eql(products.map(e => e.sellIn));
  });

  it("should update prices as expected ", () => {
    car_insurance.updatePrice();
    products.map(e => e.update());
    expect(car_insurance.products.map(e => e.price)).to.eql(products.map(e => e.price));
  })

});
