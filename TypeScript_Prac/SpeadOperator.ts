function foo(x:number, y:number, z:number) {
    console.log(x, y, z);
}
var args:number[] = [0, 1, 2];
// var res = foo(...args);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];                   //[0,1,2,3,4,5]
arr3 = arr1.concat(arr2);                       //[0,1,2,3,4,5]

function myFunc(x:number, y:number, z:number):void {
    console.log(x);
    console.log(y);
    console.log(z);
}
let paramArray:number[] = [0, 1, 2];

// myFunc(...paramArray: number[]);


// apply() language=method
var numbers = [1, 2, 3, 4, 5];
 
console.log.apply(this,numbers);  //1 2 3 4 5 
 
console.log(...numbers); //1 2 3 4 5 
