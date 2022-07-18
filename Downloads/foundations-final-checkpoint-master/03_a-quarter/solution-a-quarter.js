/* eslint-disable no-unused-vars, no-prototype-builtins */
// function aQuarter(plus) {
//   let count = 0;
//   return function (x, y) {
//     if (count % 4 === 0 && count !== 0) {
//       count++;
//       return plus(x, y);
//     }
//     count++;
//     return 'something went wrong :/';
//   };
// }

function aQuarter(plus) {
  let count = 0;
  return function (num1, num2, ...theArgs) {
    count++;
    if (count % 4 === 0 && count !== 0) {
      return plus(num1, num2, ...theArgs);
    } else {
      return 'something went wrong :/';
    }
  };
}
