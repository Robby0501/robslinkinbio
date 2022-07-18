/* eslint-disable no-unused-vars, no-prototype-builtins */
let count = 0;
function alternate(func) {
  let invoke = true;
  return function () {
    if (invoke) func();
    invoke = !invoke;
  };
}

function twice(valFunc) {
  let count = 2;
  return function () {
    if (count > 0) {
      count--;
      return valFunc();
    }
    return 0;
  };
}
