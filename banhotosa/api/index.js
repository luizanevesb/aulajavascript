//variáveis ES6

const express = require('express');
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

app.use(express.json());

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'elaborata',
  database : 'petshop'
});

// conecta com o banco
connection.connect(); 

//lista serviços
app.get("/servicos", function(req, res){
    
    let sql = "SELECT * FROM servico ORDER BY id, nome ASC";

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });

    //connection.end();

});

//lista agendamentos

app.get("/agendamentos", function(req, res){
    
    let sql = "SELECT A.id, A.datahora, A.nome_pet, S.nome as servico FROM `agendamento` A inner join servico S on A.servico = S.id";

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    
    //connection.end();

});

app.post("/cadastro", function(req, res){

    console.log(req.body);
    res.write("ok");
    res.end();

})

app.listen(port, () => console.log(`listening on port ${port}!`));


