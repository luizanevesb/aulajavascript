<?php

    var_dump($_POST);
    var_dump($_SERVER);

    $host = "banco.db";
    $user = "";
    $senha = "";

    $db = new PDO("sqlite:banco.db",$user,$senha);

    //var_dump($db);

    $query = "insert into contatos (nome, email, telefone, cidade) values ()";


?>