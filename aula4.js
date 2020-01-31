//funções

var nome = "Luiza";

function imprime() 
{
    console.log(nome);
}

function soma(n1,n2)
{
    var resultado = n1 + n2;
    return resultado;
}

//função anônima
var sub = function(n1, n2)
{
    return n1 - n2;
}

//ligar o painel
function ligar() 
{
    var letreiro = document.getElementById("letreiro");
    var texto = letreiro.innerHTML;

    console.log(texto);

    primeiraletra = texto.slice(0,1);

    frase = texto.slice(1) + primeiraletra;

    letreiro.innerHTML = frase;

}

//ligar o painel
function ligarAutomatico() 
{
    var letreiro = document.getElementById("letreiro");
    var texto = letreiro.innerHTML;

    console.log(texto);

    primeiraletra = texto.slice(0,1);

    frase = texto.slice(1) + primeiraletra;

    letreiro.innerHTML = frase;

}