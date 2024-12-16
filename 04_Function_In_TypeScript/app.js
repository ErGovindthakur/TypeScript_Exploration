console.log("Function in TypeScript");
// Function return type
function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(5, 2));
function greet(name) {
    return "Hi ".concat(name);
}
console.log(greet("Govind"));
function printTable(table) {
    for (var i = 0; i <= 10; i++) {
        console.log("".concat(table, " * ").concat(i, " = ").concat(table * i));
    }
}
printTable(3);
//combine function with return type
var combineFunction;
combineFunction = addNum;
console.log(combineFunction(5, 4));
// function addHandle(a:number,b:number, cb:(n:number)=>void){
//      const result = a+b;
//      cb(result)
// }
function addHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addHandle(20, 10, function (result) {
    console.log(result);
});
