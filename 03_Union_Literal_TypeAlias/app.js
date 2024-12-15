//1)  union (|) -: It's generally used to assign more than one type to a single variable
var addNum = function (num1, num2, conversionType) {
    var result;
    if (num1 === "number" && num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
};
console.log(addNum(10, 20, "as-number"));
console.log(addNum("30", "30", "as-number"));
console.log(addNum("Govind", " Thakur", "as-string"));
var user = {
    fullname: "Ajay",
    email: "aj@gmail.com"
};
console.log(user);
// type alias with function
var greet = function (user) {
    return "Hi, I'm ".concat(user.fullname);
};
console.log(greet(user));
