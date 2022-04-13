// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgKoalas})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// //Test2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

//Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ['Deepak','Steve','Michael'] //Array is mutable because array is not a primitive data type
// console.log(friends[0])

// friends[2] = "Jay";
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName,'Schmedtmann',2037-1991,'teacher',friends]
// console.log(jonas,jonas.length);

// //Exercises
// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990,1967,2002,2010,2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1,age2, age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
// console.log(ages);

// const friends = ['Deepak','Steve','Michael']
// const newLength = friends.push('Jay');
// console.log(friends,newLength);

// friends.unshift('John'); // unshift and push methods return the length of the array
// console.log(friends);

// //Remove elements
// friends.pop();//last
// const popped = friends.pop();//pop method returns the removed element
// console.log(friends,popped);

// //Remove the first element from the arrays
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steve'))
// console.log(friends.indexOf('Bob'))

// friends.push(23)
// console.log(friends.includes('Steve'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steve')){
//     console.log('You have a friend called Peter');
// }
// Coding challenge #2

// const calcTip = (billValue) => {
//   if(billValue >= 50 && billValue <=300){
//       return billValue * .15
//   }
//   return billValue * 0.2
// }

// const bills = [125,555,44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills.length-1)]
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length-1] + tips[tips.length-1]]
// console.log(total);

// console.log(calcTip(100));

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter','Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter','Steven']
// }

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interestedIn]){
//    console.log(jonas[interestedIn]);
// }else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  // calcAge: function(){
  //     return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());

//Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

//coding challenge 3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// for loops keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifiting weights repetition ${rep} 🏋️‍♀️`);
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   //Reading from jonas array
//   console.log(`jonasArray[${i}]:`, jonasArray[i], typeof jonasArray[i]);

//   // filling types array
//   //   types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // 0, 1, ,,, , 4
// //4,3, ,,, 0

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//Use while loop when counter is not needed
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end... ");
  }
}

// coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

const calcTip = (bills) => {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
      total.push(bills[i] + tips[i]);
    } else {
      tips.push(bills[i] * 0.2);
      total.push(bills[i] + tips[i]);
    }
  }
};

calcTip(bills);
console.log("Tips:", tips, "Total:", total);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

const averageTotal = calcAverage(total);
console.log("Average of total is:", averageTotal);
