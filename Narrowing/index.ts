// in this example we will learn truthness

function printTdoods(todos: string[] | null) {
  if (todos) {
    todos.map(todo => console.log(todo));
  } else {
    console.log("no todos");
  }
}

const todos = ['todo1', 'todo2'];

printTdoods(null);
