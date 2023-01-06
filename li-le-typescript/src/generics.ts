interface ContactGen {
    id: number;
    name: string;
}

function cloneGen<T>(source: T): T { // T is a generic type use any type passed in.
    return Object.assign({}, source);
}

const aGen: ContactGen = { id: 1, name: "John Simpson"};
const bGen = cloneGen(aGen);

let dateRange = { start: new Date(), end: new Date() };
const dateRangeCopy = cloneGen(dateRange);

function doubleGen<T1, T2>(value: T1): T2 {
    let returnValue: T2 = 4 as any;
    return returnValue;
}

const aDoubleGen: number = doubleGen<number, number>(1);

function extender<T1, T2 extends T1>(value: T1): T2 {
    return value as T2;
}

interface Doggo {
    id: number;
    legCount: number;
}

interface ArmedDog extends Dog {
    id: number;
    legCount: number;
    armCount: number;
}

// Function that takes a Dog adds armCount property with a value of 2 and returns an ArmedDog
function armer<T1, T2 extends T1>(value: T1): T2 {
    return Object.assign(value, { armCount: 2 }) as T2;
}

let dog: Doggo = { id: 1, legCount: 4 };
let armedDog: ArmedDog = armer<Doggo, ArmedDog>(dog);
console.log(armedDog);