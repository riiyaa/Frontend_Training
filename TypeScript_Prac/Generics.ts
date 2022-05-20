function displayDataType<T, U>(id:T, name:U): void {   
    console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
  }  
  displayDataType<number, string>(88,"76");  