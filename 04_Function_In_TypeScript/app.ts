console.log("Function in TypeScript")

// Function return type

function addNum(num1:number, num2:number):number{
     return num1+num2;
}
console.log(addNum(5,2))

function greet(name:string):string{
     return `Hi ${name}`
}
console.log(greet("Govind"))

function printTable(table:number):void{
     for(let i:number=0; i<=10; i++){
          console.log(`${table} * ${i} = ${table*i}`)
     }
}
printTable(3)

//combine function with return type

let combineFunction : (n1:number,n2:number) => number
combineFunction = addNum;
console.log(combineFunction(5,4))


// function type & callback

type CB = (n:number) => void

// function addHandle(a:number,b:number, cb:(n:number)=>void){
//      const result = a+b;
//      cb(result)
// }
function addHandle(a:number,b:number, cb:CB){
     const result = a+b;
     cb(result)
}
addHandle(20,10,(result)=>{
     console.log(result)
})