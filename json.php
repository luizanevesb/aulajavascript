<?php

    $nome = "Luiza";

    class Carro 
    {
        public $cor = "Preto";
        public $marca = "Toyota";
        private $ligado = false;

        public function ligar ()
        {
            $this->ligado = true;
        }
    }

    $novo = new Carro();

    //var_dump($novo);

    //echo json_encode($novo);

    $string = '{"cor":"Preto","marca":"Toyota"}';
    $json = json_decode($string);
    var_dump($json);

?>
