/* eslint-disable no-unused-vars, no-prototype-builtins */

// function wordFrequency(arr) {
//   let stringify = arr.join(' ').toString();
//   let words = stringify.replace(/[.]/g, '').split(/\s/);
//   let wordFrequencyObj = {};
//   words.forEach(function (func) {
//     if (!wordFrequencyObj[func]) {
//       wordFrequencyObj[func] = 0;
//     }
//     wordFrequencyObj[func] += 1;
//   });

//   return wordFrequencyObj;
// }

// function concatenation(array, startI = 0) {
//   let newArr = [];
//   for (let i = array.length - 1; i >= startI; i--) {
//     newArr.push(array[i]);
//   }
//   let joined = newArr.join('');
//   return joined.toString();
// }

function reduceRight(array, start, callBackFunc) {
  for (let i = array.length - 1; i >= 0; i--) {
    start = callBackFunc(start, array[i]);
  }
  return start;
}
