const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.input');
const toDoList = document.querySelector('.todo-list');
const logArray = document.querySelector('.log-array');


let toDoListArray = [];

// ToDo properties: complete/incomplete, text value

addBtn.addEventListener('click', () => {

	// Create todo element
	const toDo = {
		task: input.value,
		complete: false
	}
	
	const taskNode = `<li>`
	const li = document.createElement('li');
	
	li.textContent = toDo.task;
	toDoList.append(li);
	
	// Append todo to array
	toDoListArray.push(toDo);
	
	//Create li element
	toDoListArray.forEach(element => {
		
	});
	// Append created element
});

logArray.addEventListener('click', () => {
	console.log(toDoListArray);
});

