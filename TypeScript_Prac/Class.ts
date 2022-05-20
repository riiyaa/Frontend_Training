//Class
class Colors {   
    p: string  
    constructor(color:string) {  
        this.p = color;  
    }  
    display():void {  
        console.log("Color of Audio: " + this.p);   
    }  
}  

const object = new Colors("Pink");
object.p = "Blue";
object.display();


//Single Inheritance
class Car {   
    Color:string     
    constructor(color:string) {   
       this.Color = color  
    }   
 }   
 class Audi extends Car {   
     Price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.Price = price;  
     }  
     display():void {  
         console.log("Color of Audi car: " + this.Color);  
         console.log("Price of Audi car: " + this.Price);  
     }  
 }  
 let obj = new Audi(" Black", 8500000 );  
 obj.display();  


 //Multi-level Inheritance
 class Root { 
    heading :string; 
    constructor(head:string){
        this.heading = head;
    }
 } 
 
 class Child extends Root {
     num : number;
     constructor(digit:number){
         super("Riya");
         this.num = digit;
     }
 }; 
 class Leaf extends Child {
     isTrue:boolean
     constructor(name:string,value:number,check:boolean){
         super(67);
         this.heading = name;
         this.num = value;
         this.isTrue = check
     }
     dis(){
         console.log("name: "+this.heading+" age: "+this.num+" is: "+this.isTrue)
     }
 }; //indirectly inherits from Root by virtue of inheritance  
 
 var Obj = new Leaf("Karan",5435,true);
 Obj.dis();