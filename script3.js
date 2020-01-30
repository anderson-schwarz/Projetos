var input = document.querySelector('#app input');
var button = document.querySelector('#app button');
var texto = document.querySelector('#app');
function consulta(){
	var id = input.value;
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.github.com/users/' + id);
	xhr.send(null);

	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var response = (JSON.parse(xhr.responseText));
				var consulta = document.createElement('p') ;
				var consultaText = document.createTextNode(
					'Login: ' + response.login
				);
				consulta.appendChild(consultaText);
				texto.appendChild(consulta);
			}else{
				alert('Usuario Inexistente');
			}
		}
	}
}
button.onclick = consulta;
 