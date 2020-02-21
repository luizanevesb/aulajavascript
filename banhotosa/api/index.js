//variáveis ES6

const express = require('express');
const app = express();
const port = 3000;


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
    
    let sql = "SELECT * FROM servico ORDER BY servico, nome ASC";

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });

    //connection.end();

});

//lista agendamentos

app.get("/agendamentos", function(req, res){
    
    let sql = "SELECT * FROM `agendamento` ORDER BY `agendamento`.`datahora` DESC";

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    
    //connection.end();

});

app.listen(port, () => console.log(`listening on port ${port}!`));


