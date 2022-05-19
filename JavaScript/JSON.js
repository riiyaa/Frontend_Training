// JSON data
//"name": "John"

//JSON Object 
var data = { "name": "John", "age": 22}

// JSON array
var data1 = [ "apple", "mango", "banana"]

// JSON array containing objects
var data2 =[
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 },
    { "name": "Mark", "age": 23 }
]


// JSON object
const detail = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(detail.name); // John
console.log(detail.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(detail.hobby.sport); // football
console.log(detail.class[1]); // HTML