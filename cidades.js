// variaveis BD
var listaCidades = ["Curitiba", "Pinhais", "Maringá", "Cuiabá"];

function imprime()
{
    var lista = document.getElementById("lista");
    //lista.innerHTML = "<li>" + listaCidades + "</li>";

    var ult = listaCidades.length-1

    for (var i = 0; i <= ult; i += 1)
    {
        //console.log(cidades[i]);
        lista.innerHTML += "<li>"+ listaCidades[i] +"</li>";
    }


/*
    for (var i = ult; i>=0; i-=1)
    {
        //console.log(cidades[i]);
        lista.innerHTML += "<li>"+ listaCidades[i] +"</li>";
    }
*/
}

function adiciona()
{
    lista.innerHTML = "";
    var input = document.getElementById("novacidade");
    var cidade = input.value;

    if (listaCidades.indexOf(cidade) > -1) 
    {
        alert("Cidade já registrada.")
    } else {
        listaCidades.push(input.value);
        imprime();
        limpaInput();
    }


}

function limpaInput()
{
    var novacidade = document.getElementById("novacidade");
    novacidade.value = "";
}

function ordenaCres(ord)
{

    lista.innerHTML = "";

    if (ord == "desc")
    {
        listaCidades.sort();
        listaCidades.reverse();
        imprime();
    } else {
        listaCidades.sort();
        //listaCidades.reverse();
        imprime();
    }
}

function ordenaDesc()
{

    lista.innerHTML = "";
    listaCidades.sort().reverse();

    imprime();

}

var cresc = true;

function alterna()
{

    lista.innerHTML = "";

    listaCidades.sort();

    if (cresc == false)
    {
        listaCidades.reverse();
    }    
    imprime();
    //inversão lógica
    cresc = !cresc; 

}


