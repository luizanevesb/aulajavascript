$(document).ready(function(){

    $("#btn-cadastrar").click(function (){

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var sexo = $("input[name=sexo]:checked").val();
        var periodo = $("#periodo").val();

        if (nome == "") 
        {
            alert("O campo nome é obrigatório.");
            return false;
        }

        var linha = "<tr><td>" + nome + "</td>"
        +"<td>" + email + "</td>"
        +"<td>" + telefone + "</td>"
        +"<td>" + sexo + "</td>"
        +"<td>" + periodo + "</td></tr>";

        $("#alunos").append(linha);

    }); //fim do click

}); //fim ready

/*
function cadastrar() 
{
    var nome = document.getElementById("nome").value;
    var email = document.getElementByI("email").value;
    var telefone = document.getElementByI("telefone").value;

    var alunos = $("alunos");

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

}*/