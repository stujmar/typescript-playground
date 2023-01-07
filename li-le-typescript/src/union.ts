console.log("-- union types --");

enum isActive {
    Active = "active",
    Inactive = "inactive",
}

type ContactBirthDate = Date | number | string;
type ContactsName = string;

interface Deets extends Addy{
    id: number;
    name: ContactsName;
    birthDate?: ContactBirthDate;
    status: isActive;
}

interface Addy {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: number;
}

function getBirthDate(birthDate: ContactBirthDate) : Date {
    if (birthDate instanceof Date) {
        return birthDate;
    } else if (typeof birthDate === "number") {
        return new Date(birthDate);
    } else if (typeof birthDate === "string") {
        return new Date (Date.parse(birthDate));
    }
}

let dateDate = new Date("2021-09-11");
let dateNumber = Date.now();
let dateString = "2021-09-11";

console.log("-- parsing dates --");
console.log(getBirthDate(dateDate));
console.log(getBirthDate(dateNumber));
console.log(getBirthDate(dateString));