// npm install express --save

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cliente = require("./public/lib/cad_cliente");
const Gerente = require('./public/lib/cad_gerente');
const Vendedor = require('./public/lib/cad_vendedor');

// const gerente = require("./public/lib/cad_gerente");
// const vendedor = require("./public/lib/cad_vendedor");


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, ()=> {
    console.log("Estou na porta 3000")
});

app.get('/', function (req,res){
    res.sendFile(__dirname + "/public/")
});

app.get('/public/cadastro/cliente', function (req,res){
    res.sendFile(__dirname + "/public/cadastro/cliente.html")
});

app.get('public/cadastro/gerente', function (req,res){
    res.sendFile(__dirname + "/public/cadastro/gerente.html")
});

app.get('public/cadastro/vendedor', function (req,res){
    res.sendFile(__dirname + "/public/cadastro/vendedor.html")
});

app.post("/lib/cad_cliente", (req, res) => {
    nome = req.body.nome;
    cpf = req.body.cpf;
    dataNasc = req.body.dataNasc;
    email = req.body.email;
    numeroCartaoF = req.body.numeroCartaoF;
    telefone = req.body.telefone;

    cliente = new Cliente(nome, cpf, dataNasc, email, numeroCartaoF, telefone);
    
    res.send(cliente);
});

app.post("/lib/cad_gerente", (req, res) => {
    nome = req.body.nome;
    cpf = req.body.cpf;
    dataNasc = req.body.dataNasc;
    dataCont = req.body.dataCont;
    salarioBase = req.body.salarioBase;
    departamento = req.body.departamento;

    gerente = new Gerente(nome, cpf, dataNasc, dataCont, salarioBase, departamento);
    
    res.send(gerente);
});

app.post('/lib/cad_Vendedor', (req , res)=> {
    nome = req.body.nome;
    cpf = req.body.cpf;
    dataNasc = req.body.dataNasc;
    dataCont = req.body.dataCont;
    salarioBase = req.body.salarioBase;
    porcentagemCom = req.body.porcentagemCom;

    vendedor = new Vendedor(nome, cpf, dataNasc, dataCont, salarioBase, porcentagemCom);

    res.send(vendedor);
});

// instalar o body-parser
// npm install body_parser --save
