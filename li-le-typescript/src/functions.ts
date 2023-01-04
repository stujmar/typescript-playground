interface Cat {
    id: number;
    name: string;
}

interface Dog {
    id: number;
    name: string;
    bark(message:string): string
}

function clone(source) {
    return Object.apply({}, source);
}

function cloneCat(source: Cat): Cat {
    return Object.apply({}, source);
}

let cat: Cat = { id: 1, name: "Fluffy" };

let clonedCat = cloneCat(cat);


function catMaker(source: Cat, func:(source: Cat) => Cat): Cat { // func is a function that takes a Cat and returns a Cat
    return Object.apply({}, source);
}

let message: string = "Hello";

let shout = (message: string) => {
    console.log(message.toUpperCase());
}

let shouter = (messageParam: string, funcParam: (message: string) => void) => {
    funcParam(messageParam);
}

shouter(message, shout);
shouter("bort", shout);