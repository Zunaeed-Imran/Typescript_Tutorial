// in this example we will learn truthness
function printTdoods(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos");
    }
}
var todos = ['todo1', 'todo2'];
printTdoods(null);
