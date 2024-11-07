# Significance of Union and Intersection Types in TypeScript

## Union Types

A union type allows a variable to hold more than one type. A developer use the `|` symbol to combine types. For example, `string | number` means a variable could be either a `string` or a `number`. Union types make it easy to handle different types in a single variable. This is helpful when there are multiple options for what a variable could be, allowing us to handle each type differently. 

Union types are especially useful for functions that need to accept different types of inputs, like a function that can take either a `string` or `number`.

### Example:

```typescript
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String: " + value.toUpperCase());
    } else {
        console.log("Number: " + (value + 10));
    }
}
In this example, printValue accepts either a string or number and handles each type appropriately.

Intersection Types
An intersection type combines multiple types into one. You use the & symbol to combine types, meaning a variable must have all the properties of the combined types. Intersection types are useful when you need to create a type that combines properties from multiple types, ensuring that an object includes everything required by each type.

Intersection types come in handy when you want an object that has properties from multiple types, like when a function requires an object with properties from both Person and Employee.

Example:
typescript
Copy code
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
In this example, PersonEmployee is an intersection type that requires both name (from Person) and employeeId (from Employee), ensuring the object includes everything defined in both types.

Together, union and intersection types help TypeScript manage complex data in a clear, safe, and structured way. They enable flexible and strict typing, making your code easier to read and less error-prone.