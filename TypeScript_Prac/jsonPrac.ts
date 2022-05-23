import mode from './Json/demo.json';

let table = [];
for(let i in mode){
    for(let j=0 ;j< mode[i].tables.length;j++){
        table.push(mode[i].tables[j]);
    }
}
// console.log(table);

let val1 = []
// for(let i of mode){
//     val1.push(i.tables);
// }
val1 = mode.map(fun => fun.tables);
val1 = val1.flat();
// console.log(val1);

let val2 = []
// for(let j of val1){
//     val2.push(val1.filter(fun => fun.checked_in_reservation));
// }
val2 = val1.map(fun => fun.checked_in_reservation);
val2 = val2.flat();
// console.log(val2);

let val3 = [];
// for(let k of val1){
//     val3.push(val1.filter(fun => fun.no_of_seats>2 && fun.available==1));
// }
val3 = val1.map(fun => fun.no_of_seats>2 && fun.available==1);
val3 = val3.flat();
// console.log(val3);

const val4:any[]=[];
   
mode.map(sec => {
    sec.tables.map(tab => {
        if(tab.upcoming_reservations.length>=1){
            let val = {
                id:sec.id,
                name:tab.name,
                upcommingCount:tab.upcoming_reservations.length
            }
            val4.push(val);
        }
        
    })
})
// console.log(val4);


let v = Object.entries(mode[1]);
let v1 = Object.keys(mode[1]);
let v2 = Object.values(mode[1]);
// console.log(v , v1 , v2);

// let v:any;
// for(let i of mode){
//     v += i.id  
// }