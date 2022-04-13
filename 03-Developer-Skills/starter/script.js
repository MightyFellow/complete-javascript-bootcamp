// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [5, -1, 6, 'error', 23, -5, 1, 'error', 19];

// const calcTempAmplitude = function (temps1, temps2) {
//   const temps = [...temps1, ...temps2];
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures1, temperatures2);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree celsius:')), //C) FIX
//   };

//   //B) FIND
//   console.log(measurement);
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

const maxTemperatures1 = [17, 21, 23];
const maxTemperatures2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return (string += `... ${arr[i]}\xB0C in ${i + 1} days ...`);
    }
    string += `... ${arr[i]}\xB0C in ${i + 1} days `;
  }
  return string;
};

const display1 = printForecast(maxTemperatures1);
const display2 = printForecast(maxTemperatures2);
console.log('---- Day1 ----');
console.log(display1);
console.log('---- Day2 ----');
console.log(display2);
