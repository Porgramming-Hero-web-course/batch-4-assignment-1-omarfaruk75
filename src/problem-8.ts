{
//problem-8
interface IPerson {
    name:string,
    age:number,
    email:string,
}
const person:IPerson = { 
    name: "Alice",
    age: 25, 
    email: "alice@example.com",
};
function validateKeys<T extends object>(obj:T, keys: (keyof T)[]):boolean {
    return keys.every(key => key in obj);
} 

// console.log(validateKeys(person, ["name", "email","age"]));














}