// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilterOption = document.querySelector('.todo-filter');
//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoFilterOption.addEventListener('click', filterTodos);

//Functions
function addTodo(e){

    //prevent form from submmiting
    e.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //CreateLi

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Checked Mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add('compelete-btn');
    todoDiv.appendChild(completedButton);

    //Checked Trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append
    todoList.appendChild(todoDiv);

    //Clear todo 
    todoInput.value ="";

}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation

        todo.classList.add('fall');
        todo.addEventListener('transitioned', function(){
            todo.remove();
        });
     
    }

    //Check Mark

    if(item.classList[0] === 'compelete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
 
}

//Filtering the tasks

function filterTodos(e){
    const todos = todoList.childNodes;
    for(let i = 1; i < todos.length; i++){
        switch(e.target.value){
            case "all":
                todos[i].style.display = "flex";
                break;

            case "completed":
            
            if(todos[i].classList.contains('completed')){

                todos[i].style.display = "flex";
            }else{
              
                todos[i].style.display = "none"
            }
            break;

             case "uncompleted":

             if(!todos[i].classList.contains('completed')){
                 todos[i].style.display = 'flex';
             }else{
                 todos[i].style.display = 'none';
             }
             break;
        }
    }
}


