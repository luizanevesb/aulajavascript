function adicionaCidade() 
{
    var texto = document.getElementById("novacidade");
    var cidade = texto.value;
    
    var lista = document.getElementById("lista");

    var existe = lista.innerHTML.search(cidade);

    if (existe == -1) {
        lista.innerHTML += "<li>"+ cidade +"</li>";
    } else {
        window.alert("Cidade já cadastrada");
    }

    novacidade.value = "";

}

function nome() 
{
    var nome = document.getElementById("nome");
    
    var box = document.getElementById("box");

    box.innerHTML = nome.value.toUpperCase();

}