
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('description').innerText = "You changed the text!";
});

const colorChangeButtons = document.querySelectorAll('.color-change-button');
colorChangeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const colorText = document.querySelector('.color-text');
        colorText.style.color = colorText.style.color === 'red' ? 'blue' : 'red';
    });
});

let count = 0;
document.getElementById('increment-button').addEventListener('click', function() {
    count++;
    document.getElementById('count').innerText = count;
});

document.getElementById('decrement-button').addEventListener('click', function() {
    count--;
    document.getElementById('count').innerText = count;
});


document.getElementById('greet-button').addEventListener('click', function() {
    const name = document.getElementById('name-input').value;
    const greetingMessage = name ? `Hello, ${name}!` : "Hello, stranger!";
    document.getElementById('greeting').innerText = greetingMessage;
});


document.getElementById('random-color-button').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});


document.getElementById('add-todo-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
  const todoText= todoInput.value.trim();
  if(todoText){
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    
    const removeButton = document.createElement('button');
    removeButton.textContent ='Remove';
    removeButton.addEventListener('click',function(){
      todoList.removeChild(listItem);
    });
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
    todoList.value='';
   } 
  else{
    alert('please enter a todo list first!');
   }
});