<?php

    $host = "banco.db";
    $user = "";
    $senha = "";

    $db = new PDO("sqlite:banco.db",$user,$senha);

    //var_dump($db);

    $query = "select * from contatos order by 2;";

    $retorno = $db->query($query);

    $valores = $retorno->fetchAll(PDO::FETCH_ASSOC);
    //var_dump($valores);


    $contatos[0]["nome"] = "Luiza";
    $contatos[0]["email"] = "luzia@gmail.com";
    $contatos[0]["telefone"] = "(41)98504-9645";
    $contatos[0]["cidade"]  = "Curitiba";
    

    $contatos[1]["nome"] = "Teste";
    $contatos[1]["email"] = "teste@gmail.com";
    $contatos[1]["telefone"] = "(41)98504-9645";
    $contatos[1]["cidade"]  = "Curitiba";

    
    //var_dump($contatos);

    //echo json_encode($contatos);
    echo json_encode($valores);
;
?>