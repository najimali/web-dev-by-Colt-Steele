let input = prompt('What you like to do ??').trim();
let todoItems = [];
while (input !== 'quit') {
    //Add new items in the list 
    if (input === 'new') {
        addTodo();
    }
    //Show the list items in index form 
    else if (input === 'list') {
        displayTodo();
    }
    //Delete the specific item from the list
    else if (input === 'delete') {
        deleteTodo();
    }
    input = prompt('What you like to do ??').trim();
}
console.log('Okay ,You  quit the app');
function addTodo() {
    let newTodo = prompt('Add the items');
    todoItems.push(newTodo);
    console.log(`${newTodo} is added to the list`);
}
function displayTodo() {
    console.log('*******');
    todoItems.forEach((item, i) => console.log(`${i}: ${item}`));
    console.log('*******');
}
function deleteTodo() {
    let index = Math.round(prompt('Enter the index to be deleted'));
    let deletedItem = -1;
    if (index > -1 && index < todoItems.length) {
        deletedItem = todoItems[index];
        todoItems.splice(index, 1);
        console.log(`${deletedItem} is deleted!!`);

    }
    else console.log('enter a valid index');
}