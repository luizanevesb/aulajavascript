$(document).ready(function(){

    $("#carregar").click(function(){

        $.getJSON("/listagem.php", function(retorno, status){

            $("#conteudo").empty();

            retorno.forEach(function(el) {
                var tr = '<tr>'
                + '<td>' + el.nome + '</td>'
                + '<td>' + el.email + '</td>'
                + '<td>' + el.telefone + '</td>'
                + '<td>' + el.cidade + '</td>'
                + '</tr>'

            $("#conteudo").append(tr);

            });// fim foreach

        }); //fim getJSON

    }); //fim click carregar

    $("#enviar").click(function(){
 
        var campo_nome = $("#nome").val();
        var campo_email = $("#email").val();
        var campo_telefone = $("#telefone").val();
        var campo_cidade = $("#cidade").val()

        var dados = {
            nome: campo_nome,
            email: campo_email,
            telefone: campo_telefone,
            cidade: campo_cidade
        };

        $.post("/cadastrar.php", dados, function(retorno, status){

            //$("#conteudo").empty();

            retorno.forEach(function(el) {
                var tr = '<tr>'
                + '<td>' + el.nome + '</td>'
                + '<td>' + el.email + '</td>'
                + '<td>' + el.telefone + '</td>'
                + '<td>' + el.cidade + '</td>'
                + '</tr>'

            $("#conteudo").append(tr);

            });// fim foreach

        }); //fim getJSON

    }); //fim click

}); //fim ready