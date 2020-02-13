<?php

    $contatos[0]["nome"] = "Luiza";
    $contatos[0]["email"] = "luzia@gmail.com";
    $contatos[0]["telefone"] = "(41)98504-9645";
    $contatos[0]["cidade"]  = "Curitiba";
    

    $contatos[1]["nome"] = "Teste";
    $contatos[1]["email"] = "teste@gmail.com";
    $contatos[1]["telefone"] = "(41)98504-9645";
    $contatos[1]["cidade"]  = "Curitiba";

    echo json_encode($contatos);
;
?>