interface detail { 
    id:number 
 } 
 
 class AgriLoan implements detail {
    id;
    name:string 
    
    constructor(int:number,Name:string) { 
       this.id = int; 
       this.name = Name; 
    } 
 } 
 
 class Rate implements detail {
    id;
    val:boolean
 
    constructor(int:number,value:boolean){
        this.id = int;
        this.val = value;
    }
 }
 
 var ob = new AgriLoan(10,"Riya") 
//  console.log("Interest is : "+ob.id+" Rebate is : "+ob.name )
 console.log(`Interest is ${ob.id} Rebate is ${ob.name}`)
 
 var obj1 = new Rate(20,true);
 console.log("Interest is : "+obj1.id+" Rebate is : "+obj1.val )