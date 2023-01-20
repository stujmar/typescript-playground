let batman: any  = {name: "Wruce" , age: 42}; // Opting out of type checking
batman.id = 1234;

let superman: Record<string, string | number> = {name: "Clark" , age: 42}; // flexible types.
superman.id = 1234;

superman = {name: true , age: 42, id: 1234, address: "123 Main St." }; // error on flexible types.