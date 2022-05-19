"use strict";
let i = 5;
let company = "Google";
let type = true;
let age = "hello";
//Array
let data = [1, 2, 3, 4];
data.push(5);
let arr = [1, 2, true, "voooo", 5, 7, false];
let arr1 = ["10", 10];
//Tuple
let person = [1, false, "fdfd"];
//Tuple Array
let employee = [
    [1, true], [2, false], [3, true], [4, true]
];
//Union
let id;
id = "23";
id = 23;
// id = false;                      //Error
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
// console.log(Direction.left);            //ans = 2
//Enum 2
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 11] = "up";
    Direction1[Direction1["down"] = 12] = "down";
    Direction1[Direction1["left"] = 13] = "left";
    Direction1[Direction1["right"] = 14] = "right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.left);            //ans = 13
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.left);            //ans = left
//Object
let user = {
    id: 1,
    name: "riya"
};
let user1 = {
    id: 3,
    name: false
};
//Type Assertion
let cid = 1;
// let CustomerId = <number>cid
let CustomerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(2,4));                                 // ans = 6
//Void
function sms(message) {
    console.log(message);
}
// sms(true);                             //Error
// sms("hello");                          // hello
const num = [1, 23, 41, 18, 19];
// const val = (value:number):boolean=>{
//     return value>18
// }
let value1 = num.every(val => val > 18);
// console.log(value1);
const detail = [{
        "id": 1,
        "name": {
            "fname": "bhhjf",
            "lname": "gdtygh"
        },
        "complete": true,
        "hobbies": ["Reading", "Singing"],
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
        "id": 2,
        "name": {
            "fname": "ghf",
            "lname": "fesc"
        },
        "complete": false,
        "hobbies": ["Reading", "Singing", "Dancing"],
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
        "id": 3,
        "name": {
            "fname": "wdeqnju",
            "lname": "dgt"
        },
        "complete": true,
        "hobbies": [],
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
        "id": 4,
        "name": {
            "fname": "bhhjf",
            "lname": "gdtygh"
        },
        "complete": true,
        "hobbies": ["Reading"],
        "friends": [
            {
                "id": "44",
                "name": "tgre"
            }
        ]
    }
];
let val = [];
for (let x of detail) {
    val.push(x.hobbies);
}
let val1 = detail.map(fun => {
    return fun.hobbies;
});
//console.log(val1)
let txt = "";
let val2 = detail.find(fun => {
    return fun.complete.valueOf() == false;
});
let val3 = val2 === null || val2 === void 0 ? void 0 : val2.friends;
console.log(val3);
