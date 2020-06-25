let input = prompt('What you like to do ??').trim();
let todoItems = [];
while (input !== 'quit') {
    //    Add new items in the list 
    if (input === 'new') {
        let newTodo = prompt('Add the items');
        todoItems.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    }
    //Show the list items in index form 
    else if (input === 'list') {
        for (let i = 0; i < todoItems.length; i++)
            console.log(`${i}: ${todoItems[i]}`);
    }
    //Delete the specific item from the list
    else if (input === 'delete') {
        let index = Math.round(prompt('Enter the index'));
        let deletedItem = -1;
        if (index > -1) {
            deletedItem = todoItems[index];
            todoItems.splice(index, 1);
            console.log(`${deletedItem} is deleted!!`);

        }
        else console.log('enter a valid index');

    }
    input = prompt('What you like to do ??').trim();
}
console.log('Okay ,You have quit the app');