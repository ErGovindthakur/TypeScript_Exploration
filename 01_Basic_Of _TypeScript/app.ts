// Date types -: string, number, boolean

function add(num1:number,num2:number, printResult:boolean, statement:string){

     // Q ) Why we need typescript 
     // 1) If we use core js we will need to write code like below

     // if(typeof num1 === 'number' && typeof num1 === 'number'){
     //      return num1+num2;
     // }
     // else{
     //      return +num1 + num2 + " Coming from else condition"
     // }

     // 2)  We use typeScript to reduce the code and provide type safety

     if(printResult){
          console.log(`${statement} ${num1+num2}`);
     }
     else{
          return num1+num2;
     }

}

const n1 = 5; 
const n2 = 7;
const statement = "Sum of give two number is = ";
const printResult = true;

add(n1,n2,printResult,statement)