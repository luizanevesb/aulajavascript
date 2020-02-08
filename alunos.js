
$(document).ready(function(){

    $("#btn-cadastrar").click(function () {

        var vetor_periodos = ["", "Manhã", "Tarde", "Noite"];

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val()
        var sexo = $("input[name=sexo]:checked").val();
        var errado = false;

        $("#msgalert").hide();
        $("input, select").removeClass("erro");
        

        if (nome.trim().length < 2)
        {            
            $("#msgalert").append("<li>O campo nome é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#nome").addClass("erro");
            $("#nome").focus();
            errado = true;
        }

        if (email == "")
        {
            $("#msgalert").append("<li>O campo email é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#email").addClass("erro");
            $("#email").focus();
            errado = true;
        } else 
        {
            var email_regex = /^[0-9a-z\.\_\-]*@[0-9a-z.]*$/gm;
            if (email.search(email_regex) == -1)
            {
                $("#msgalert").append("<li>O formato do email é invalido</li>");
                $("#msgalert").fadeIn();
                $("#email").addClass("erro");
                $("#email").focus();
                errado = true;
            }
        }

        if (telefone == "")
        {
            $("#msgalert").append("<li>O campo telefone é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#telefone").addClass("erro");
            $("#telefone").focus();
            errado = true;
        } else 
        {
            var fone_regex = /^\([0-9][0-9]\)[0-9]{4,5}-[0-9]{4}$/gm;
            
            if (telefone.search(fone_regex) == -1)
            {
                $("#msgalert").append("<li>O formato do telefone é invalido</li>");
                $("#telefone").addClass("erro");
                $("#telefone").focus();
                errado = true;
            }

        }

        if (sexo == undefined)
        {
            $("#msgalert").append("<li>O campo sexo é obrigatorio</li>");
            $("#sexo").addClass("erro");   
            $("#msgalert").fadeIn();         
            errado = true;
        }

        if (periodo == 0)
        {
            $("#msgalert").append("<li>O campo periodo é obrigatorio</li>");
            $("#msgalert").fadeIn();
            $("#periodo").addClass("erro");
            $("#periodo").focus();
            errado = true;
        }

        if (errado == true) 
        {
            return false;
        } 

        /*
        if (sexo == "M")
        {
            var sexo_rotulo = "Masculino";
        } else {
            var sexo_rotulo = "Feminino";
        }*/
        // if ternario
        var sexo_rotulo = (sexo == "M")? "Masculino" : "Feminino";

        var linha = "<tr>"
            +"<td>"+ nome +"</td>"
            +"<td>"+ email +"</td>"
            +"<td>"+ telefone +"</td>"
            +"<td>"+ sexo_rotulo +"</td>"
            +"<td>"+ vetor_periodos[periodo] + "</td>"
            +"</tr>";

        $("#alunos").append(linha);

    }); //fim do click

    $("#telefone").mask("(00)90000-0000")

}); // fim ready


