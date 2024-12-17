console.log('Unknown any never');
// let userInput : unknown;
// but
var userInput;
var userName = "Ajay";
// userInput = userName;
// userName = userInput; // throw error bcz string doesn't contains unknown value
userName = userInput; // it is assignable
console.log(userInput);
// use of never
function generateError(message, statuscode) {
    throw { message: message, statuscode: statuscode };
}
var response = generateError("Internal sever error", 501);
console.log(response);
