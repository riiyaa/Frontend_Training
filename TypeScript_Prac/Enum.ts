//Numeric Enum
enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine = 9,
  Book,
}

function getMedia(mediaName: string): PrintMedia {
  if (mediaName === "Forbes" || mediaName === "Outlook") {
    return PrintMedia.Magazine;
  } else {
    return PrintMedia.Book;
  }
}

let mediaType: PrintMedia = getMedia("Forbes8");
// console.log(mediaType);                         //return 10

//Computed Enum
// When the enum includes computed and constant members, then uninitiated enum members either must come first or must come after other initialized members with numeric constants.
enum PrintMedia1 {
  Newspaper = 1,
  Newsletter = getPrintMediaCode("newsletter"),
  Magazine = Newsletter * 3,
  Book = 10,
}

function getPrintMediaCode(mediaName: string): number {
  if (mediaName === "newsletter1") {
    return 5;
  } else {
    return 6;
  }
}

// console.log(PrintMedia1.Newsletter);                 // return 6
// console.log(PrintMedia1.Magazine);                   // return 18

//String Enum
enum PrintMedia2 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
// console.log(PrintMedia2.Newspaper);            //returns NEWSPAPER
// console.log(PrintMedia2['Magazine']);          //return MAGAZINE


//Heterogeneous Enum
enum PrintMedia3{
    Newspaper = "NEWS",
    Newsletter = 2,
    Magazine = "253",
    Book = 23
}
// console.log(PrintMedia3.Newspaper);             //return NEWS
console.log(PrintMedia3["253"]);                   

