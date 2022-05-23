//-----------------------------------------------------------------------------------------
function display1<T>(name: T[]): void {
  console.log(name.join("-"));
}
display1<string>(["steve", "billy"])  //T =string


//-----------------------------------------------------------------------------------------------
function display2<T>(id: T,phone:T ,name: string): void {
    console.log(typeof (id) + ", " +typeof(phone)+", "+ typeof (name));
}

display2<number>(1, 1234567890,"Steve"); // T = number, string(already declared)

//-----------------------------------------------------------------------------------------------------------------
function displayy<T,U>(id:T, name:U): void {   
  console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
}  
displayy<number, string>(88,"76");  
