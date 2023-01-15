var dropdownBtn = document.querySelector('.botao');
var dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function () {
	dropdownContent.classList.toggle('show');
});

function recarregarHome() {
	location.reload();
}

// desafio 1 ---------------------------------------------------
function antecessor() {
	let numero = document.querySelector('.input').value;
	let resultado = numero - 1;

	document.querySelector('.box-pergunta').innerHTML = '';
	document.querySelector('.box-resposta').innerHTML =
		'O número que antecede ' + numero + ' é: <br><br><div>' + resultado;

	console.log(resultado);
}

function desafio1() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 1.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Digite um valor para descobrir seu antecessor:</p>' +
		'</div><div class="campo-input">' +
		'<input class="input" type="number" placeholder="Digite um número" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="antecessor()" class="botao-questoes">Go</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 2 --------------------------------------------------------
function areaDoTriangulo() {
	let base = parseFloat(document.querySelector('#base').value);
	let altura = parseFloat(document.querySelector('#altura').value);

	let resultado = base * altura;

	document.querySelector('.box-pergunta').innerHTML = '';
	document.querySelector('.box-resposta').innerHTML =
		'A área do triangulo é: <br><br>' + resultado;

	console.log(resultado);
}

function desafio2() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 2.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Descubra a área do triangulo: </p></div>' +
		'<div class="campo-input">' +
		'<input class="input" id="base" type="number" placeholder="Digite a base" />' +
		'<input class="input" id="altura" type="number" placeholder="Digite a altura" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="areaDoTriangulo()" class="botao-questoes">Calcule</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 3-----------------------------------------------------------------------
function calculoNovoSalario() {
	let salario = parseFloat(document.querySelector('#salario').value);
	let reajuste = parseFloat(document.querySelector('#reajuste').value);

	let porcentagemSalario = (reajuste / 100) * salario;
	let novoSalario = salario + porcentagemSalario;

	document.querySelector('.box-pergunta').innerHTML = '';
	document.querySelector('.box-resposta').innerHTML =
		'O novo sálario que voçê irá receber é de: <br><br>R$' + novoSalario;

	console.log(novoSalario);
}

function desafio3() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 3.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Ver quanto vai ficar seu sálario depois do reajuste:</p>' +
		'</div><div class="campo-input">' +
		'<input id="salario"class="input"type="number" placeholder="Digite seu sálario" />' +
		'<input id="reajuste"class="input"type="number" placeholder="(%) reajuste" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="calculoNovoSalario()" class="botao-questoes">Calcule</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 4 -----------------------------------------------------
function mediaFinal() {
	let nota1 = parseFloat(document.querySelector('#nota1').value);
	let nota2 = parseFloat(document.querySelector('#nota2').value);
	let nota3 = parseFloat(document.querySelector('#nota3').value);

	let resultado = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

	document.querySelector('.box-pergunta').innerHTML = '';
	document.querySelector('.box-resposta').innerHTML =
		'A sua média final é: <br><br><div>' + resultado;

	console.log(resultado);
}

function desafio4() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 4.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Ver sua média final:</p>' +
		'</div><div class="campo-input">' +
		'<input id="nota1"class="input"type="number" placeholder="Primeira nota" />' +
		'<input id="nota2"class="input"type="number" placeholder="Segunda nota" />' +
		'</div><div class="campo-input">' +
		'<input id="nota3"class="input"type="number" placeholder="Terceira nota" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="mediaFinal()" class="botao-questoes">Calcule</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 5 ---------------------------------------------------------------
function maiorOuNao() {
	let numero = parseFloat(document.querySelector('.input').value);

	if (numero < 10) {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'O número ' + numero + ' é menor que 10!!! ';

		console.log(numero);
	} else if (numero == 10) {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'O número ' + numero + ' é igual a 10!!! ';

		console.log(numero);
	} else {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'O número ' + numero + ' é maior que 10!!! ';

		console.log(numero);
	}
}

function desafio5() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 5.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Digite o número para saber se ele é maior que 10:</p>' +
		'</div><div class="campo-input">' +
		'<input class="input" type="number" placeholder="Digite um número" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="maiorOuNao()" class="botao-questoes">Go</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 6 ----------------------------------------------------------------
function numeroPositivoOuNao() {
	let numero = document.querySelector('.input').value;

	if (numero >= 0) {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'O número ' + numero + ' é POSITIVO!!! ';

		console.log(numero);
	} else {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'O número ' + numero + ' é NEGATIVO!!! ';

		console.log(numero);
	}
}

function desafio6() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 6.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Digite o número que vc quer descobrir se é positivo:</p>' +
		'</div><div class="campo-input">' +
		'<input class="input" type="number" placeholder="Digite um número" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="numeroPositivoOuNao()" class="botao-questoes">Go</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 7---------------------------------------------------------------------------
function custoDaCompra() {
	let qntdComprada = parseInt(document.querySelector('.input').value);

	if (qntdComprada >= 12) {
		let custoTotal = qntdComprada * 1;
		let custoTotalArredondado = custoTotal.toFixed(2);

		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'As ' +
			qntdComprada +
			' maçã(s) vão sair por:<br><br> R$' +
			custoTotalArredondado;

		console.log(custoTotal);
	} else {
		let custoTotal = qntdComprada * 1.3;
		let custoTotalArredondado = custoTotal.toFixed(2);

		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'As ' +
			qntdComprada +
			' maçã(s) vão sair por:<br><br> R$' +
			custoTotalArredondado;

		console.log(custoTotal);
	}
}

function desafio7() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 7.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Quantas maçãs foram compradas:</p>' +
		'</div><div class="campo-input">' +
		'<input class="input" type="number" placeholder="Digite um número" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="custoDaCompra()" class="botao-questoes">Go</button></div></div>' +
		'<div class="box-resposta"></div>';
}

// desafio 8 ----------------------------------------------------------------------
function calculeMedia() {
	let nota1 = parseFloat(document.querySelector('#nota1').value);
	let nota2 = parseFloat(document.querySelector('#nota2').value);

	let media = (nota1 + nota2) / 2;

	if (media >= 6) {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'Você está APROVADO!!!<br><br> Sua média foi: ' + media;

		console.log(media);
	} else {
		document.querySelector('.box-pergunta').innerHTML = '';
		document.querySelector('.box-resposta').innerHTML =
			'Você está na recuperação!!!<br><br> Sua média foi: ' + media;

		console.log(media);
	}
}

function desafio8() {
	// document.querySelector('.container').innerHTML = '';
	var myDiv = document.querySelector('.container');

	// Obtém a referência para o elemento pai da div
	var parent = myDiv.parentNode;

	// Remove a div do elemento pai
	parent.removeChild(myDiv);

	document.querySelector('.desafios').innerHTML =
		'<div class="botao-home">' +
		'<button onclick="recarregarHome()" id="botao-home" class="botao-neon">' +
		'<img src="/img/icons8-página-inicial-48.png" alt="" />' +
		'</button>' +
		'</div>' +
		// '<div class="botao-reload">' +
		// '<button onclick="desafio1()" id="botao-reload" class="botao-neon">' +
		// '<img src="/img/icons8-hexagon-reload-48.png" alt="" />' +
		// '</button>' +
		// '</div>' +
		'<div class="container-questoes">' +
		'<div class="questao-n"><h1>Desafio 8.</h1></div></div>' +
		'<div class="container-questoes"><div class="box-pergunta">' +
		'<div class="pergunta"><p>Ver sua média final:</p>' +
		'</div><div class="campo-input">' +
		'<input id="nota1"class="input"type="number" placeholder="Primeira nota" />' +
		'<input id="nota2"class="input"type="number" placeholder="Segunda nota" />' +
		'</div><div class="campo-botao">' +
		'<button onclick="calculeMedia()" class="botao-questoes">Calcule</button></div></div>' +
		'<div class="box-resposta"></div>';
}
