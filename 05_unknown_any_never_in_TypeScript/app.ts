console.log('Unknown any never')

// let userInput : unknown;
// but

let userInput:any;

let userName : string = "Ajay";
// userInput = userName;
// userName = userInput; // throw error bcz string doesn't contains unknown value

userName = userInput; // it is assignable
console.log(userInput)


// use of never

function generateError(message:string,statuscode:number):never{
     throw {message,statuscode}
}
const response = generateError("Internal sever error",501)
console.log(response)