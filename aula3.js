function adicionaCidade() 
{
    var novacidade = document.getElementById("novacidade").value;
    
    document.getElementById("lista").innerHTML += "<li>"+ novacidade+"</li>";

    document.getElementById("novacidade").value = null;

}