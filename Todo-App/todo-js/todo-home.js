let input = prompt('What you like to do ??').trim();
let todoItems = [];
while(input!=='quit'){
//    This will add new items in the list 
    if(input === 'new'){
        let newTodo = prompt('Add the items');
        todoItems.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    }
    else if(input==='list'){
        for(let i = 0;i<todoItems.length;i++)
        console.log(`${i}: ${todoItems[i]}`);
    }
    else if (input==='delete'){
        let index = Math.round(prompt('Enter the index'));
        let deletedItem = -1;
        if(index>-1){
            deletedItem = todoItems[index];
            todoItems.splice(index,1);
            console.log(`${deletedItem} is deleted!!`);
           
        }
        else  console.log('enter a valid index');
        
    }
    input = prompt('What you like to do ??').trim();
}
console.log('Okay ,You have quit the app');