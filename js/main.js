function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/sign-in");
    //window.location.href = "https://digitalinnovation.one/sign-in";
}

function trocar(element){
    element.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(element){
    element.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(element){
    console.log(element.value);
}


/*function soma(n1, n2){
    return n1 + n2;
}


/*
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;

}

/*
var d = new Date();
alert(d.getMinutes());


/*let cont = 0 ;
for (cont; cont<=5; cont++){
    alert(cont);
};


/*var cont = 0;
while(cont < 5) {
    console.log(cont);
    cont ++;
};


/*var idade = prompt("Qual sua idade?");
var idade = 18;
if(idade>=18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
};


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"banana" , cor:"amarelo"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça" , cor:"vermelha"};
console.log(fruta.nome);


var lista = ["maça" , "pera" , "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));


var  nome = "joão Pedro";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLocaleLowerCase());
*/