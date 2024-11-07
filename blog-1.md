## Qusestion-1: The significance of union and intersection types in Typescript.

## Union Types

# A union type allows a variable to hold more than one type. You use the ”|”  symbol to combine types. For example string | number means a variable could be either a string or a number. Union types handle different types in a single variable. This is helpful when multiple options for what a variable could be and want to handle each type differently. Union types are great for functions that need to accept different types of inputs, like a function that can take either a string or number.

Example:

function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String: " + value.toUpperCase());
    } else {
        console.log("Number: " + (value + 10));
    }
}
##  Intersection Types

 # An intersection type combines multiple types into one. You use the & symbol to combine types. This means a variable must have all the properties of the combined types. Intersection types are helpful when a developer need to create a type that combines properties from multiple types. It ensures that an object includes everything required by each type.Intersection types are useful when you want an object that combines properties from multiple types, like when a function requires an object that has properties from both Person and Employee.

Example:

interface Person {
    name: string;
}
interface Employee {
    employeeId: number;
}

type PersonEmployee = Person & Employee;


const personEmployee: PersonEmployee = {
    name: "Alice",
    employeeId: 123
};

# Together, union and intersection types help TypeScript manage complex data in a clear, safe, and structured way.


