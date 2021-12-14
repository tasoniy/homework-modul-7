// задание 1

let country = {
    name: 'Russia',
    population: 144100000,
    capital: 'Moscow',
    currency: 'rubles'
  }
  
  function getPropObj(obj) {
    for(let prop in obj){
      if(obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop])
      }
    }
    
  }
  getPropObj(country);

  // задание 2

  let country = {
    name: 'Russia',
    population: 144100000,
    capital: 'Moscow',
    currency: 'rubles'
  }
  
  function checkProp(obj, string) {
      if(string in obj) {
        console.log(true)
      } else {
        console.log(false)
      }
  }
  checkProp(country,'capital');

  // задание 3

  function emptyObj() {
    let obj = Object.create(null);
    console.log(obj)
  }
  emptyObj();
  

  // задание 4

function ElectDev(name,power) {
  this.name = name;
  this.power = power;
  this.turnOff = function() {
    console.log(`${this.name} is turn off`)
  }
  this.turnOn = function() {
    console.log(`${this.name} is turn on`)
  }
}
let kettle = new ElectDev('Bosch',2000);
let printer = new ElectDev('Canon',120);
//kettle.turnOn();
//printer.turnOff();
//console.log(kettle);

function Computer(name,type) {
  this.name = name;
  this.type = type;
  this.loading = function() {
    console.log(`${name} is loading`);
  }
}

Computer.prototype = new ElectDev();

let laptop = new Computer('HP ProBook','laptop');
let desktop = new Computer('Dell Optiplex','desktop');
//desktop.turnOn();
//desktop.loading();
//console.log(laptop);

Telephone.prototype = new ElectDev();

function Telephone(name,type,typeOfСharger) {
  this.name = name;
  this.type = type;
  this.typeOfСharger = typeOfСharger;
  this.onCharge = function () {
    console.log(`${name} on charge`)
  }
}

let smartphone = new Telephone('Pixel 5','smartphone', 'type C');
let mobilphone = new Telephone('Sony Ericsson Walkman 3000', 'mobilphone', 'mini USB');
smartphone.turnOn();
smartphone.onCharge();
console.log(mobilphone);

// задание 5

class ElectDev {
  constructor(name,power) {
    this.name = name;
    this.power = power;
  }
  turnOn() {
    console.log(`${this.name} is turn on`);
  }
  turnOff() {
    console.log(this.name + ' is turn off');
  }
}

let kettle = new ElectDev('bosch',2000);
let printer = new ElectDev('canon',120);
//printer.turnOn();
//kettle.turnOff();
//console.log(printer);

class Computer extends ElectDev {
  constructor(type,name,power){
    super(name,power);
    this.type = type;
  }
  loading() {
    console.log(`${this.name} is loading`)
  }
}

let laptop = new Computer('laptop','HP ProBook', 70);
let desktop = new Computer('desktop','Dell Optiplex',100);
//console.log(laptop);
//desktop.loading();

class Telephone extends ElectDev {
  constructor(typeOfСharger,type, name, power) {
    super(name,power);
    this.typeOfСharger = typeOfСharger;
    this.type = type;
  }
  onCharge() {
    console.log(`${this.name} on charge`)
  }
}

let smartphone = new Telephone('type C','smartphone','Pixel 5', 120);
let mobilphone = new Telephone('mini USB','mobilphone','Sony Ericsson Walkman 3000', 120);
//console.log(smartphone);
//mobilphone.turnOff();
//mobilphone.onCharge();
