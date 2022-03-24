/* задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
*/

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

  /* задание 2
  Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
  переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

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

/* задание 3
Написать функцию, которая создает пустой объект, но без прототипа.
*/

  function emptyObj() {
    let obj = Object.create(null);
    console.log(obj)
  }
  emptyObj();
  
 /* задание 4

Определить иерархию электроприборов. Реализуйте приложение на прототипах. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д.
*/

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

/* задание 5
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

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
