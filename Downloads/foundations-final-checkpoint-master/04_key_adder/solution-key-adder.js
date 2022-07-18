/* eslint-disable no-unused-vars, no-prototype-builtins */
function keyAdder() {
  let cleanArr = [];
  let arr = Object.values(this);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      cleanArr.push(arr[i]);
    }
  }
  let sum = cleanArr.reduce((prevVal, currVal) => prevVal + currVal);
  return sum;
}
