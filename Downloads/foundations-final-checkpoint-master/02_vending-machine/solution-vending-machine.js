/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }
  sale(itemID) {
    this.inventory[itemID].stock -= 1;
    return `1 ${this.inventory[itemID].name} - Thank you and come again!`;
  }
  stockTotal() {
    let currStock = [];
    for (let values in this.inventory) {
      currStock.push(this.inventory[values].stock);
    }
    let sum = currStock.reduce((prevVal, currVal) => prevVal + currVal);
    if (sum === 0) {
      return 'Out of Stock';
    }
    return `${sum} item(s)`;
  }
}
