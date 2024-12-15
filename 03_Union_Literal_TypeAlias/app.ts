//1)  union (|) -: It's generally used to assign more than one type to a single variable

// const addNum = (num1:number | string,num2:number | string) => {
//      let result;
//      if(num1==="number" && num2==="number"){
//           result = num1 + num2
//      }
//      else{
//           result = +num1 + +num2
//      }
//      return result
// }

// const num1 = 12;
// const num2 = 24;

// const num3 = "9";
// const num4 = "9";

// const sum1 = addNum(num1,num2)
// console.log(sum1)

// const sum2 = addNum(num3,num4)
// console.log(sum2)

//2) Literal -: It is something like assigning our custom data types

// const addNum = (num1:number | string,num2:number | string, conversionType : "as-number" | "as-string") => {
//      let result;
//      if(num1==="number" && num2==="number" || conversionType === "as-number"){
//           result = +num1 + +num2
//      }
//      else{
//           result = num1.toString() + num2.toString()
//      }
//      return result
// }

// console.log(addNum(10,20,"as-number"))
// console.log(addNum("30","30","as-number"))
// console.log(addNum("Govind"," Thakur","as-string"))


// 3) Type Alias (Custom data types) -: used to reduce complexity and increase readability of code

type ConversionType = "as-number" | "as-string"

const addNum = (num1:number | string,num2:number | string, conversionType : ConversionType ) => {
     let result;
     if(num1==="number" && num2==="number" || conversionType === "as-number"){
          result = +num1 + +num2
     }
     else{
          result = num1.toString() + num2.toString()
     }
     return result
}

console.log(addNum(10,20,"as-number"))
console.log(addNum("30","30","as-number"))
console.log(addNum("Govind"," Thakur","as-string"))


// Another example

type User = {
     fullname:string,
     email:string
}
const user : User = {
     fullname:"Ajay",
     email:"aj@gmail.com"
}
console.log(user)

// type alias with function

const greet = (user:User) => {
     return `Hi, I'm ${user.fullname}`
}
console.log(greet(user))