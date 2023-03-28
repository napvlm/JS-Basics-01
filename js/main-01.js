// String
const name = "Robert";

// Number
const height = 140;

// Bolean => true/false
const positive = true;
const negative = false;

// Array         0       1       2
const myArr = ['text', 12345, height];
myArr[0];

//Object
const myCar = {
  //key  value
  brand: 'Mercedes-Benz',
  model: 'C300',
  color: 'white',
  VIN: 'AQWEQWE123912312E',
  plate: '1337',
  start: function () {
    alert('Engine started, ready to go');
  }
}

let carPlate = prompt('Tell me licence plate number');

if (carPlate !== myCar.plate) {
  alert("It's not your car, look more")
} else if (carPlate === myCar.plate) {
  alert("It's your car, ready to go");
  myCar.start();
}
