
//BOTÃO NAVEGAÇÃO sobe e desce

/*
var listaDeIds = [] (escreve na mão mesmo, não esquecer de colocar as #s)
window.location.hash = listaDeIds[listaDeIds.indexOf(window.location.hash) + 1] 

fala que a localização por # do viewport = procurar no array de IDs pela próxima ID, ou seja, 
											manda o view port pra proxima hash
Não esquecer de fazer um botão para ação e colocar um eventListener

nota para o futuro: prestar muita atenção aonde está o link do .js no html (Cannot read property 'addEventListener' of null)

Falta fazer os botões sumirem na primeira e ultima section!!
*/

var listaIDs = ["#header", "#cinema", "#pessoas", "#feedback"];

var botaoDesce = document.getElementById("botaoDesce");
var botaoSobe = document.getElementById("botaoSobe");

botaoDesce.addEventListener("click", function(event) {
	
	if(listaIDs.indexOf(window.location.hash) + 1 > 3) {
		listaIDs.indexOf(window.location.hash) = 3;
	} else {
		window.location.hash = listaIDs [listaIDs.indexOf(window.location.hash) + 1];
	}

});

botaoSobe.addEventListener("click", function(event) {

	if(listaIDs.indexOf(window.location.hash) - 1 < 0) {
		listaIDs.indexOf(window.location.hash) = 0;
	} else {
		window.location.hash = listaIDs [listaIDs.indexOf(window.location.hash) - 1];
	}
});

//ESCOLHA DE PERSONAGENS - troca de classes para trocar a imgFicha
// dever ter um jeito menos braçal de fazer isso... achar e aplicar!

var imgFicha = document.querySelector("#imgFicha");
var botaoBlank1 = document.querySelector("#blank1");
var botaoBlank2 = document.querySelector("#blank2");
var botaoBlank3 = document.querySelector("#blank3");
var botaoBlank4 = document.querySelector("#blank4");
var botaoFabio = document.querySelector(".fabio");
var botaoLids = document.querySelector(".lids");
var botaoRafa = document.querySelector(".rafa");
var botaoZero = document.querySelector(".zero");
var nome = document.querySelector("#nomeFicha");
var descricao = document.querySelector("#textoFicha");

botaoBlank1.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaBlank";
	nome.innerHTML = "";
	descricao.innerHTML = "";
});

botaoBlank2.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaBlank";
	nome.innerHTML = "";
	descricao.innerHTML = "";
});

botaoBlank3.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaBlank";
	nome.innerHTML = "";
	descricao.innerHTML = "";
});

botaoBlank4.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaBlank";
	nome.innerHTML = "";
	descricao.innerHTML = "";
});

botaoFabio.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaFabio";
	nome.innerHTML = "Fabio";
	descricao.innerHTML = "Arquiteto por formação, escolheu ser desenhista. Jogos são parte importante de sua vida: jogar, analisar, desenvolver e comer são só alguns dos seus passatempos favoritos!";
});

botaoLids.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaLids";
	nome.innerHTML = "Lids";
	descricao.innerHTML = "Formada em arquitetura, futura game designer. Se interessa facilmente pelos mais diversos assuntos e atividades. Paixões recorrentes: Video games, desenho, pintura, animações, artes manuais e doces.";
});

botaoRafa.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaRafa";
	nome.innerHTML = "Rafa";
	descricao.innerHTML = "Entusiasta de Star Wars, war games, gordices, “wibbly wobbly timey wimey stuff.” Estudou Comunicação e Multimeios, Cinema, Fotografia e Gastronomia.";
});

botaoZero.addEventListener("click", function() {
	imgFicha.className = "imgFicha fichaZero";
	nome.innerHTML = "Zero";
	descricao.innerHTML = "...";
});

//HIGHLIGHT NO MENU DA SECTION ATUAL - talvez não seja JS



