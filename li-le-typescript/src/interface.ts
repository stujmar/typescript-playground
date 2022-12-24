type ContactName = string; // Type alias;

interface User {
    id: number;
    name: ContactName;
    birthDate?: Date; // Optional property
    address?: Address; // Optional nested interface property
}

interface Address {
    street: string;
    city: string;
    state: string;
    zip: number;
}

interface locatedUser extends Address { // Extends the Address interface (has all the properties of Address)
    id: number;
    name: string;
    birthDate?: Date; // Optional property
}

let activeUser: User;
let secondaryUser: User;
let otherUser: User;

activeUser = { id: 1 , name:"John", birthDate: new Date("1/1/2000")};
secondaryUser = { id: 2 , name:"Jane"};
otherUser = { id: 2 , name:"Jane", address: { street: "123 Main St", city: "Anytown", state: "CA", zip: 12345 }};
