{
//problem-8
interface Person {
    name:string,
    age:number,
    email:string,
}
const person:Person = { 
    name: "Alice",
    age: 25, 
    email: "alice@example.com",
};
function validateKeys<T extends object>(obj:T, keys: (keyof T)[]):boolean {
    return keys.every(key => key in obj);
} 

//console.log(validateKeys(person, ["name", "email","age"]));














}