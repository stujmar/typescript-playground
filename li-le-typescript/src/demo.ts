// class Contact {
//     id;
//     name;
//     birthDate;
// }

type Contact = {
    id: number,
    name: string,
    status?: "active" | "inactive",
    birthDate?: Date,
}

// Definte a variable as a number.
let x: number = 5;
// Definte a variable as a string.
let y: string = "Hello";
// Definte a variable as a boolean.
let z: boolean = true;
// Definte a variable as any type.
let w: any = 5;
// Now w can be a number or a string.
w = "Hello";
// Definte a variable as a number array.
let a: number[] = [1, 2, 3];
// Definte a variable as a string array.
let b: string[] = ["a", "b", "c"];
// Definte a variable as a boolean array.
let c: boolean[] = [true, false, true];
// Definte a variable as an any array.
let d: any[] = [1, "a", true];
// Definte a variable as a Contact object (or any other class).
// let e: Contact = new Contact();