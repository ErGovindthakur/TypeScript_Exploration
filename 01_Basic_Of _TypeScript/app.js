// Date types -: string, number, boolean
function add(num1, num2, printResult, statement) {
    // Q ) Why we need typescript 
    // 1) If we use core js we will need to write code like below
    // if(typeof num1 === 'number' && typeof num1 === 'number'){
    //      return num1+num2;
    // }
    // else{
    //      return +num1 + num2 + " Coming from else condition"
    // }
    // 2)  We use typeScript to reduce the code and provide type safety
    if (printResult) {
        console.log("".concat(statement, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 5;
var n2 = 7;
var statement = "Sum of give two number is = ";
var printResult = true;
add(n1, n2, printResult, statement);
