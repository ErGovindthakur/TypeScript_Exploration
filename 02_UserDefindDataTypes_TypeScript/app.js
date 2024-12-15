// Array , Object , tuple, enum
var person = {
    firstName: "Govind",
    email: "ergovind@gmail.com",
    password: "123",
    address: {
        village: "Ramsapur",
        houseNo: 9,
        city: "Amritsar"
    },
    skills: {
        skills: ["ReactJs", "Nodejs", "ExpressJs", "Mongodb", "Basic Python", "Basic Django", "C++", "Basic Java"]
    }
};
console.log(person);
// Dealing with array in ts
// array contains only strings
var favoriteLanguage = ["JavaScript", "C++", "Python"];
console.log(favoriteLanguage);
// array contains only numbers
var naturalNumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(naturalNumList);
// array contains every data types (but here lost the power of typescript)
var everyData = ["Raja", 123, true, [{ "data": "data" }]];
console.log(everyData);
// tuple (It's nothing but fixed size of array with fixed data types)
var subjectMarks = ["Maths", 90];
console.log(subjectMarks);
// enum -: in js we generally allow user to select only from the given list 
var select;
(function (select) {
    select[select["Male"] = 0] = "Male";
    select[select["Female"] = 1] = "Female";
    select[select["Others"] = 2] = "Others";
})(select || (select = {}));
var personDetail = {
    name: "Ajay",
    age: 21,
    country: "India",
    gender: select.Male
};
if (personDetail.gender === select.Male) {
    console.log("Male");
}
console.log(personDetail);
