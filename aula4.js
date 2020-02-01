//funções

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

    primeiraletra = texto.slice(0,1);

    frase = texto.slice(1) + primeiraletra;

    letreiro.innerHTML = frase;

}

var id;

//ligar o painel
function ligarAutomatico() 
{
    id = window.setInterval(ligar,200);
}

function desligar() 
{
    window.clearInterval(id);
}

var listaCidades = []

function adicionaCidade() 
{
    var texto = document.getElementById("novacidade");
    var cidade = texto.value;
    
    var lista = document.getElementById("lista");

    listaCidades.push(cidade);
   
    novacidade.value = ""
    imprimeCidades();

}

function imprimeCidades()
{
    var lista = document.getElementById("lista");

    lista.innerHTML = ""

    var ult = listaCidades.length-1

    for (var i = 0; i <= ult; i += 1)
    {
        //console.log(cidades[i]);
        lista.innerHTML += "<li>"+ listaCidades[i] +"</li>";
    }

    /*
    for (var i = cidades.length-1; i <= ult; i -= 1)
    {
        //console.log(cidades[i]);
        lista.innerHTML += "<li>"+ cidades[i] +"</li>";
    }
    */
}