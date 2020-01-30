var list = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var button = document.querySelector('#app button');



var todos = JSON.parse(localStorage.getItem('list')) ||[];

function render(){
	list.innerHTML = '';
	for(todo of todos){
		var todoElement = document.createElement('li') ;
		var todoText = document.createTextNode(todo);


		var link = document.createElement('a') ;
		link.setAttribute('href', '#');
		var linkText = document.createTextNode('Excluir');

		var pos = todos.indexOf(todo);
		link.setAttribute('onclick', 'delete_('+pos+')');

		link.appendChild(linkText);
		todoElement.appendChild(todoText);
		todoElement.appendChild(link);
		list.appendChild(todoElement);
	}
}

render();

function add(){
	var text = input.value;

	todos.push(text);
	input.value = '';
	render();
	storage();
}

button.onclick = add;

function delete_(pos){
	todos.splice(pos, 2);
	render();
	storage();
}

function storage(){
	localStorage.setItem('list', JSON.stringify(todos));
}