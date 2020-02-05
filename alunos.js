function cadastrar() 
{
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    var alunos = document.getElementById("alunos");

    if (nome == "") 
    {
        alert("O campo nome é obrigatório.");
        return false;
    }

    alunos.innerHTML += "<tr><td>" + nome + "</td>"
    +"<td>" + email + "</td>"
    +"<td>" + telefone + "</td>"
    +"<td>F</td>"
    +"<td>Manhã</td></tr>";
;

}