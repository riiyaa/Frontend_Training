let i:number = 5;
let company:string = "Google";
let type:boolean = true;
let age:any = "hello";

//Array
let data:number[]=[1,2,3,4];
data.push(5);

let arr:any[] = [1,2,true,"voooo",5,7,false];
let arr1:(string|number)[] = ["10",10]

//Tuple
let person:[number,boolean,string] = [1,false,"fdfd"];

//Tuple Array
let employee : [number,boolean][] = [
    [1,true],[2,false],[3,true],[4,true]
]

//Union
let id:number|string;
id = "23";
id = 23;
// id = false;                      //Error

//Enum
enum Direction{
    up,down,left,right
}
// console.log(Direction.left);            //ans = 2

//Enum 2
enum Direction1{
    up=11,down,left,right
}
// console.log(Direction1.left);            //ans = 13

enum Direction2{
    up="up",down="down",left="left",right="right"
}
// console.log(Direction2.left);            //ans = left

//Object
let user:{
    id:number,name:string
} = {
    id:1,
    name:"riya"
}

//Object
type User ={
    id:number,name:boolean
}

let user1:User= {
    id:3,
    name:false
}

//Type Assertion
let cid : any = 1
// let CustomerId = <number>cid
let CustomerId = cid as number


//Function
function addNum(x:number,y:number):number{
    return x + y;
}
// console.log(addNum(2,4));                                 // ans = 6


//Void
function sms(message:string|number) : void{
    console.log(message); 
}
// sms(true);                             //Error
// sms("hello");                          // hello



const num: number[] = [1,23,41,18,19];

// const val = (value:number):boolean=>{
//     return value>18
// }
let value1:boolean = num.every(val => val>18);

// console.log(value1);


const detail = [{
    "id":1,
    "name":{
            "fname":"bhhjf",
            "lname":"gdtygh"
           },
    "complete":true,
    "hobbies":["Reading","Singing"],
    "friends": [
          {
            "id": "43",
            "name": "gtfgbbh"
          },
          {
              "id": "454",
            "name": "gfd"
          }
        ]
    },
    {
    "id":2,
    "name":{
            "fname":"ghf",
            "lname":"fesc" 
           },
    "complete":false,
    "hobbies":["Reading","Singing","Dancing"],
    "friends": [
          {
            "id": "3",
            "name": null
          },
          {
              "id": "2",
            "name": "aqw"
          }
        ]
    },
    {
    "id":3,
    "name":{
            "fname":"wdeqnju",
            "lname":"dgt" 
           },
    "complete":true,
    "hobbies":[],
    "friends": [
          {
            "id": "33",
            "name": "ghnjuy"
          },
          {
              "id": "545",
            "name": "re"
          },
          {
              "id": "76",
            "name": "rrr"
          }
        ]
    },
    {
    "id":4,
    "name":{
            "fname":"bhhjf",
            "lname":"gdtygh" 
           },
    "complete":true,
    "hobbies":["Reading"],
    "friends": [
          {
            "id": "44",
            "name": "tgre"
          }
        ]
    }
    ];
    let val = []
    for(let x of detail){
        val.push(x.hobbies)
        
    }
    let val1 = detail.map(fun =>{ 
        return fun.hobbies
    });
    //console.log(val1)

    let txt = "";
    let val2 = detail.find(fun => {
      return fun.complete.valueOf() == false
    })
    let val3 = val2?.friends
    console.log(val3);
    