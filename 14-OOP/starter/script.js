'use strict';
/*
// function declaration should be capital and we can't use ES6 arrow function 
// for constructor function because it does not have "this" keyword
const Person = function(firstName, birthYear) {
    // Instance Properties
    
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
//   this.calcAge = function() {
//       console.log(2037 - this.birthYear);
//   }
}
   
const jonas = new Person('Jonas', 1991);
console.log(jonas)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2016);
const jack = new Person('Jack wu',1975);
console.log(matilda,jack);

const jay = {firstName:'Jay',birthYear: 1990};

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);//proto is the 
console.log(jonas.__proto__ === Person.prototype); //Person.prototype is not the prototype of the Person
//but is the prototype property of the object which created it.

console.log(Person.prototype.isPrototypeOf(jonas))
console.log(Person.prototype.isPrototypeOf(matilda))
console.log(Person.prototype.isPrototypeOf(Person))

//prototype -> .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')+"because the property is in prototype property of Person ");

console.log(jonas.__proto__);
// Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
// Object.prototype is the top of the prototype chain so it will be null
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor); // Will point back to function itself(Person)

const arr = [3,6,6,4,5,9,9,4,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)]
} 

Array.prototype.Deepak = function() {
    return [...this.join("^")];
}

console.log(arr.unique())
console.log(arr.Deepak())

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Challenge

const Car = function(make = null, speed = 10) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    console.log(this.speed + 10 +" km/h");
}

Car.prototype.brake = function() {
    console.log(this.speed - 5 + " km/h");
}

const BMW = new Car('Noise', 120);
BMW.accelerate();
BMW.brake();

const Mercedes = new Car('Noise', 95);
Mercedes.accelerate();
Mercedes.brake();

*/


/*
// class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name){
        console.log(name)
        if(name.includes(' ')) 
           this._fullName = name;
        else 
            alert(`${name} is not a full name!`)   
    }

    get fullName() {
        return this._fullName;
    }

    static hey(){
        console.log(`Hey there`)
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

//1. Classes are NOT Hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

const walter = new PersonCl('Walter white', 1965)

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    get latest(){
        return this.movements.slice(-1).pop();
    } ,

    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },
    
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Coding Challenge #2
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
         this.speed = speed * 1.6;
    }
}

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.speedUS = 50;
console.log(bmw);

*/

// Inheritance with constructor functions
/*
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person)

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//Coding Challenge #3

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

//Link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);

EV.prototype.chargeBattery = function(chargeTo) {
   this.charge = chargeTo;
}

// Overrides the accelerate method of CAR
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}

 

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(50);
console.dir(tesla);
tesla.brake();
*/

//Inheritance using the ES6 class
/*
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method
    calcAge() {
      console.log(2022-this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    //static method
    static hey() {
        console.log(`Hey there 👋`);
    }
}

class StudentCl extends PersonCl {
   constructor(fullName, birthYear, course){
       // Always needs to happen first!
       super(fullName, birthYear);
       this.course = course;
   }

   introduce() {
       console.log(`My name is ${this.fullName} and I study ${this.course}`);
   }

   //Overrides parent class calcAge() method
   calcAge(){
    console.log(`I'm ${2022-this.birthYear} years old, but as a student I feel more like ${2037-this.birthYear + 10}`)
   }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

/////////////////////////////////
// Inheritance between "Classes": Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

*/

// 1) Public fields
// 2) Private fields
// 3) Public Methods
// 4) Private methods

//ES6 classes example
class Account {
    // 1) Public fields (instances)
    locale = window.navigator.language;
    

    // 2) Private fields
    #movements = []
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        //protected property
        this.#pin = pin;
        //protected property
        // this._movements = [];
        // this.locale = window.navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods

    //Public interface of our objects
    getMovements(){
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val)
        return this
    }

    // Protected Method (with _functionName(){})
    // _approveLoan(val){
    //     return true;
    // }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper(){
        console.log(`Helper`);
    }

    // 4) Private methods
    // #approveLoan(val){}
    _approveLoan(val){
       return true;
    }
}

const account1 = new Account('Jonas', 'EUR', 1111);
// account1.#movements.push(122);
account1.deposit(250);
account1.withdraw(144);
account1.requestLoan(1000); 

console.log(account1.getMovements());
console.log(account1);
console.log(account1._pin);
Account.helper();

// console.log(account1.#pin);
// console.log(account1.#approveLoan(100));

//Chaining
account1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

// ############################
// Coding Challenge #4

class CarCl{
    constructor(make, speed){
       this.make = make;
       this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl{
    //Private property
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }
    
    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`)
        return this;
    }
}


const rivian = new EVCl('Rivian',120, 23);
rivian.accelerate().accelerate().chargeBattery(40).brake();

