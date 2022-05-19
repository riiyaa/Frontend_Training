var fruits = ["Apple","Orange","Banana","Mango","Grapes"];
// console.log(fruits,"=>Array");
// console.log(fruits.toString(),"   =>String");
// console.log(fruits.join(" "),"    =>join");
// console.log(fruits.pop(),"    =>pop");
// console.log(fruits.push("Kiwi"),"     =>push");
// console.log(fruits.shift(),"    =>shift");
// console.log(fruits.unshift("Lemon"),"   =>unshift");
// console.log(fruits[fruits.length]="Kiwi");
// console.log(fruits,"    =>before splice");
// var remove = fruits.splice(2,1,"Kiwi","Lemon");
// console.log(fruits,"   =>after splice");
// console.log(remove,"    =>remove in splice");

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
// 	console.log(x,"x");
//   text += x + "<br>";
// }

const num = [1,23,41,18,19];

function val(value){
  return value>18
}
var value = num.some(val)
console.log(value);
var value1 = num.every(val);
console.log(value1);