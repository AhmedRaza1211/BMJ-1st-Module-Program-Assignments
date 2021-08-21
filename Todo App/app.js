// Get UL
let todoList = document.getElementById('todoList');

// Add Todo Button
function addTodo() {
    let input = document.getElementById('input');
    // console.log(input);
    let li = document.createElement('li');
    let liText = document.createTextNode(input.value);
    li.appendChild(liText);
    todoList.appendChild(li);


    //Edit Button
    let editBtn = document.createElement('button');
    let editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick', 'editFun(this)');
    editBtn.classList.add('smallBtn');
    li.appendChild(editBtn);
    
    // Delete Button
    let delBtn = document.createElement('button');
    let delBtnText = document.createTextNode('Delete');
    delBtn.setAttribute('onclick', 'delFun(this)');
    delBtn.appendChild(delBtnText);
    delBtn.classList.add('smallBtn');
    li.appendChild(delBtn);
    
    
    input.value = "";
    
}

// Edit Button Function
function editFun(editBtn) {
    let editTodoSingle = prompt("Enter your edit value", editBtn.parentNode.firstChild.nodeValue);
    editBtn.parentNode.firstChild.nodeValue = editTodoSingle;  
}

// Delete Button Function
function delFun(delBtn) {
    // console.log(delBtn.parentNode);
    delBtn.parentNode.remove();
}

// Delete All Function
function deleteAll() {
    todoList.innerHTML = "";
}