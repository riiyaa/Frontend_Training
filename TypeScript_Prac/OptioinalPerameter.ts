function add(a: number, b: number, c?: number): number {
    console.log("Addition of two numbers is ")
    if(c != undefined){
        console.log(a+b+c);  
    }
    else{console.log(a+b);}
    return 0
}
console.log("Demonstration of optional parameter in Typescript")
add(2,3)
add(3,6,7)


function display(Inst_name: string, Course_name?: string): void {
    console.log(`The Institution name is given as:  ${Inst_name}`)
    if (Course_name !== undefined){
        console.log(`The Course provided is given as:   ${Course_name}`)
    }
    
}
display("asc");
display("hy", "ytr");