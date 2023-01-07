interface TodoItem {
    id: number;
    title: string;
    completedOn?: Date;
    status?: TodoStatus;
}

enum TodoStatus{
    Active = 'active',
    Deactive = 'deactive'
}

interface todoList extends Array<TodoItem>{}

const todoItems: todoList = [
    { id: 1, title: 'Buy milk', completedOn: new Date("2021-09-11") },
    { id: 2, title: 'Buy bread', status: TodoStatus.Active },
    { id: 3, title: 'Buy cheese', status: TodoStatus.Deactive },
];

function addItem(item: TodoItem, list: todoList): todoList {
    list.push(item);
    return todoItems;
}

function getNextId(list: todoList): number {
    let maxId = 0;
    list.forEach(item => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });
    return maxId + 1;
}

let fourthItem: TodoItem = { id: 4, title: 'Buy butter' };

console.log("next id:", getNextId(todoItems));
addItem(fourthItem, todoItems);
console.log("next id again:", getNextId(todoItems));

console.log(todoItems);
console.log(JSON.stringify(todoItems));