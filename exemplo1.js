//exemplo node.js

var nome = new String("Luiza");
var idade = new Number(12);
var cores = new Array("azul","preto","branco");
var soma  = function (n1, n2) {
    return n1 + n2;
}

//JSON
var carro = {
    cor: "azul",
    marca: "fiat",
    ligado: false,
    
    motor:{
        potencia: 60
    },

    andar: function(){
        console.log("carro andando");
    },
    ligar: function(){
        this.ligado = true;
        this.andar();
    }

};

// definição de classe
// ECMAScript 5
var Carro = function(){

    this.cor = "Preto";
    this.marca = "Toyota";
    
    this.ligar = function(){
        console.log("carro ligado.");
    }

}

var carro2 = new Carro();

//definição de classe
//ES6 - ES2015
class Caminhao {

    constructor(){
        this.cor = "preto";
        this.marca = "volvo";
        this.ligado = false;
    }

    ligar(){
        console.log("carro ligado.");
        this.ligado = true;
    }

}

var carreta = new Caminhao();

var json = {"cor":"azul","marca":"fiat","ligado":false,"motor":{"potencia":60}};