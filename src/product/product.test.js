import {  expect, should } from 'chai';

import Product from './product';

describe("Product", () => {
  it("should decrease the days left on update", () => {
    let product = new Product("Default", 5, 10);
    product.update();
    expect(product.sellIn).to.equal(4);
  });

  it("should never have a negative price", () => {
    let product = new Product("Default", 100, 0);
    product.update();
    expect(product.price).to.be.greaterThan(0);
  });

  it("should degrade price if product isn't \"Super Sale\"", () => {
    let product = new Product("Default", 5, 20);
    product.update();
    expect(product.price).to.equal(19);
  });

  it("should degrade price twice as fast if product is \"Super Sale\"", () => {
    let product = new Product("Super Sale", 5, 20);
    product.update();
    expect(product.price).to.equal(18);
  });

  it("should never have a price bigger than 50 if product isn't \"Mega Coverage\"", () => {
    let product = new Product("Default", 100, 50);
    product.update();
    expect(product.price).to.not.be.greaterThan(50);
  })

  it("should increase price by 2 if product is \"Special Full Coverage\" and sellIn is between 10 and 6", () => {
    let product = new Product("Special Full Coverage", 11, 20);
    product.update();
    expect(product.price).to.equal(22);
  })

  it('should increase price by 3 if product is "Special Full Coverage" and sellIn is between 5 and 1', () => {
    let product = new Product("Special Full Coverage", 3, 20);
    product.update();
    expect(product.price).to.equal(23);
  });

  it('should drop price to 0 if product is "Special Full Coverage" and sellIn is 0 or less', () => {
    let product = new Product("Special Full Coverage", 11, 1);
    product.update();
    expect(product.price).to.equal(0);
  });

  it("should increase price in \"Full Coverage\" products", () => {
    let product = new Product("Full Coverage", 60, 25);
    product.update();
    expect(product.price).to.equal(26);
  });

  it("should never decrease price in \"Mega Coverage\" products", () => {
    let product = new Product("Mega Coverage", 100, 80);
    product.update();
    expect(product.price).to.equal(80);
  })
});
