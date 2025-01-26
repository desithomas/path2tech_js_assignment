

//provided code
const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];
//end of provided code


//Fill out the `addTodo` function to be able to add more tasks to the `todos` array.
function addTodo(title, description){
  todos.push({title, description, complete: false});
}
//This function helps to remove a task fron the todo list. Be sure to log to the console.
function removeTodo(position){
  if (index >= 0 && index < todos.length){
      todos.splice(position, 1); 
  } else {
      console.log('Unable to remove the task from ToDo list ')
  }
  }


  //This function helps to edit a task in the todo list
function editTodo(position, newTitle, newDescription){
  if (index >= 0 && position < todos.length) {
      todos[position].title = newTitle;
      todos[position].description = newDescription;
  } else {
      console.log('Unable to edit the task in ToDo list');
  }
}


//This is the function that marks a task as complete
function markTodoComplete(position){
  if (position >= 0 && position < todos.length){
      todos[position].complete = true;
  } else {
      console.log('Unable to mark the task as complete');
}
}
//This function helps to display the number of tasks in the todo list
function displayTodoLength(){
  console.log(`There are ${todos.length} todos in the list`);
}

//The array iterates over the todos array and console.log each todo below this comment
function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
addTodo('Task 2', 'This is your second task');
  addTodo('Task 3', 'This is your third task');
}
  //mark the task as complete 
markTodoComplete(1);
console.log('Here is the list of your tidis: ');
displayTodoLength();

let count = 1;
for (const todo of todos){
  console.log(`Todo ${count}`);
  console.log(`The title of the todo: ${todo.title}`);
  console.log(`The description of the todo: ${todo.description}`);
  console.log(`This todo is ${todo.description ? 'complete' : 'incomplete'}`);
}





app();




















