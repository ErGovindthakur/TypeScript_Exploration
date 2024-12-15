// Array , Object , tuple, enum

const person :{ // assigning types of data in typescript
     firstName:string;
     email:string;
     password:string;
     // writing the concept of nested object
     address:{
          village:string;
          houseNo:number;
          city:string;
     }
     // Assigning an array inside the obj with types
     skills:{
          skills:string[];
     }
} = {
     firstName : "Govind",
     email:"ergovind@gmail.com",
     password:"123",
     address:{
          village:"Ramsapur",
          houseNo:9,
          city:"Amritsar"
     },
     skills:{
          skills:["ReactJs","Nodejs","ExpressJs","Mongodb","Basic Python","Basic Django","C++","Basic Java"]
     }
}

console.log(person)


// Dealing with array in ts

// array contains only strings
const favoriteLanguage : string[] = ["JavaScript","C++","Python"]
console.log(favoriteLanguage)

// array contains only numbers
const naturalNumList : number[] = [0,1,2,3,4,5,6,7,8,9];
console.log(naturalNumList)

// array contains every data types (but here lost the power of typescript)

const everyData :any[] = ["Raja",123,true,[{"data":"data"}]]
console.log(everyData)


// tuple (It's nothing but fixed size of array with fixed data types)

const subjectMarks :[string,number] = ["Maths",90];
console.log(subjectMarks);

// enum -: in js we generally allow user to select only from the given list 

enum select{Male,Female,Others}

const personDetail : {
     name:string;
     age:number;
     country:string;
     gender:select
} = {
     name:"Ajay",
     age:21,
     country:"India",
     gender:select.Male
}

// console.log(personDetail)

if(personDetail.gender === select.Male){
     console.log("Male")
}