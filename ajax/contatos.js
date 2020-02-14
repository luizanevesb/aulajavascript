var sqlite = require('sqlite3');

var db = new sqlite.Database("banco.db");

var sql = "select * from contatos order by 2;";

console.log("antes da conexão");
db.all(sql, function(erros, retorno){
    console.log(erros, retorno);
});

console.log("depois da conexão");