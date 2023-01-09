// a lot like the instanceof operator

type ContactFields = keyof Contact

const field: ContactFields = "name"

// const field2: ContactFields = "status"

function getValue(source, propertyName: keyof Contact) {
    return source[propertyName]
}

const value = getValue(primaryUser, "name");
const value2 = getValue(primaryUser, "namee");

function getGenericValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName]
}

const value3 = getGenericValue({"name": "stu", "level": "cool"}, "name");
const value4 = getGenericValue({"name": "stu", "level": "cool"}, "level");
// const value5 = getGenericValue({"name": "stu", "level": "cool"}, "cool");