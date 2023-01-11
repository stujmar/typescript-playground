console.log("typeof.ts");

const myString: string = "string";
const myBoolean: boolean = true;

// type Contact = {
//     id: number,
//     name: string,
//     status: "active" | "inactive"
// }

console.log(typeof myString);
console.log(typeof myBoolean);

function toContact(nameOrContact : string | Contact ): Contact {
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    } else {
        return {
            id: 1,
            name: nameOrContact,
            status: "active"
        }
    }
}