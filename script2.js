// AULA 1
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/dead3pool3');
// xhr.send(null);

// xhr.onreadystatechange = function(){
// 	if (xhr.readyState === 4) {
// 		console.log(JSON.parse(xhr.responseText));
// 	}
// }

var promise = function(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/dead3pool3');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				}else {
					reject('Erro na Requisição');
				}
			}
		}
	});
}

promise()
	.then(function(response){
		console.log(response);
	})
	.catch(function(error){
		console.warn(error);
	});