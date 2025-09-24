//C:\Users\lucas\OneDrive\Desktop\APILogin> nodemon server.js

//Dependências
//npm init -y
//npm install express mysql2 dotenv
//npm install cors
//npm install -g nodemon

const cors = require('cors');

const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

// Rota GET - Listar usuários
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM cliente', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Rota POST - Criar novo usuário
app.post('/usuarios', (req, res) => {
  const { cpf_cliente,nome_cliente} = req.body;

  if (!cpf_cliente || !nome_cliente) {
    return res.status(400).json({ error: 'login e senha são obrigatórios' });
  }

  const sql = 'SELECT * FROM cliente WHERE cpf_cliente = ? AND nome_cliente = ?';
  db.query(sql, [cpf_cliente,nome_cliente], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Login bem-sucedido
    const user = results[0];
    res.json({
      message: 'Login bem-sucedido',
      user: { 
        cpf_cliente: cpf_cliente,
        nome_cliente: nome_cliente,
      }
    });
  });
});

//ROTA POST - Cadastro de novos usuarios
app.post('/cadastroCliente', (req, res) => {
  const {cpf_cliente,nome_cliente,dataNasc_cliente,cep_cliente,especificacaoEndereco_cliente,telefone_cliente,email_cliente} = req.body;
  
  if  (!cpf_cliente || !nome_cliente||!dataNasc_cliente||!cep_cliente||!especificacaoEndereco_cliente||!telefone_cliente||!email_cliente){
    return res.status(400).json({ error: 'Login e senha são obrigatórios' });
  }

  const sql = `INSERT INTO cliente (cpf_cliente,nome_cliente,dataNasc_cliente,cep_cliente,especificacaoEndereco_cliente,telefone_cliente,email_cliente) VALUES (?,?,?,?,?,?,?)`;
  db.query(sql, [cpf_cliente,nome_cliente,dataNasc_cliente,cep_cliente,especificacaoEndereco_cliente,telefone_cliente,email_cliente], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Login já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.insertId });
  });
});
//nova anaminese
app.post('/Anaminese', (req, res) => {
  const {cliente_cpfCliente,esta_em_tratamento_medico,motivo_tratamento_medico,gravidez,dieta,diabetes,alergias,quais_alergias,febre_reumatica,problema_de_coagulacao,cardiaco,hemorragicos,problemas_com_anestesias,alergia_a_medicamentos,quais_medicamentos,hepatite,quanto_tempo_faz,hiv,drogas,droga_qual,fumante,ja_fumou,pressao_arterial,problema_respiratorio,qual_respiratorio,doenca_familiar,observacao,doutor_idDoutor} = req.body;
  
  if  (!cliente_cpfCliente || !esta_em_tratamento_medico||!motivo_tratamento_medico||!gravidez||!dieta||!diabetes||!alergias||!quais_alergias||!febre_reumatica||!problema_de_coagulacao||!cardiaco||!hemorragicos||!problemas_com_anestesias||!alergia_a_medicamentos||!quais_medicamentos||!hepatite||!quanto_tempo_faz||!hiv||!drogas||!droga_qual||!fumante||!ja_fumou||!pressao_arterial||!problema_respiratorio||!qual_respiratorio||!doenca_familiar||!observacao||!doutor_idDoutor){
    return res.status(400).json({ error: ' os campos são obrigatórios' });
  }

  const sql = `INSERT INTO anamnese (cliente_cpfCliente,esta_em_tratamento_medico,motivo_tratamento_medico,gravidez,dieta,diabetes,alergias,quais_alergias,febre_reumatica,problema_de_coagulacao,cardiaco,hemorragicos,problemas_com_anestesias,alergia_a_medicamentos,quais_medicamentos,hepatite,quanto_tempo_faz,hiv,drogas,droga_qual,fumante,ja_fumou,pressao_arterial,problema_respiratorio,qual_respiratorio,doenca_familiar,observacao,doutor_idDoutor) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  db.query(sql, [cliente_cpfCliente,esta_em_tratamento_medico,motivo_tratamento_medico,gravidez,dieta,diabetes,alergias,quais_alergias,febre_reumatica,problema_de_coagulacao,cardiaco,hemorragicos,problemas_com_anestesias,alergia_a_medicamentos,quais_medicamentos,hepatite,quanto_tempo_faz,hiv,drogas,droga_qual,fumante,ja_fumou,pressao_arterial,problema_respiratorio,qual_respiratorio,doenca_familiar,observacao,doutor_idDoutor], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Anaminese errada com dados errados' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Criada nova anamnese', id: result.idAnamnese});
  });
});

//  - buscar clientes
app.post('/buscarSeletiva', (req, res) => {
  const {cpf_cliente,nome_cliente} = req.body;
  const sql = 'SELECT * FROM cliente WHERE cpf_cliente LIKE ? OR nome_cliente LIKE ? order by cpf_cliente';
  db.query(sql, [cpf_cliente,nome_cliente], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
// - buscar com nome completo
app.post('/buscarCli', (req, res) => {
  const {cpf_cliente,nome_cliente} = req.body;
  const sql = 'SELECT * FROM cliente WHERE cpf_cliente = ?  OR nome_cliente = ? ';
  db.query(sql, [cpf_cliente,nome_cliente], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Login já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/cadastroDentistas', (req, res) => {
  const {nome_dentista,dataNasc_dentista,especializacao,cpf_dentista,cro,telefone_dentista,email_dentista,cep_dentista,especificacaoEndereco_dentista,tipoContrato_dentista,valorCobranca_dentista,esquemaMateriais_dentista,situacao_dentista} = req.body;
  
  if  (!nome_dentista || !dataNasc_dentista||!especializacao||!cpf_dentista||!cro||!telefone_dentista||!email_dentista|| !cep_dentista||!especificacaoEndereco_dentista||!tipoContrato_dentista||!valorCobranca_dentista||!esquemaMateriais_dentista||!situacao_dentista){
    return res.status(400).json({ error: 'Login e senha são obrigatórios' });
  }

  const sql = `INSERT INTO dentistas (nome_dentista,dataNasc_dentista,especializacao,cpf_dentista,cro,telefone_dentista,email_dentista,cep_dentista,especificacaoEndereco_dentista,tipoContrato_dentista,valorCobranca_dentista,esquemaMateriais_dentista,situacao_dentista) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  db.query(sql, [nome_dentista,dataNasc_dentista,especializacao,cpf_dentista,cro,telefone_dentista,email_dentista,cep_dentista,especificacaoEndereco_dentista,tipoContrato_dentista,valorCobranca_dentista,esquemaMateriais_dentista,situacao_dentista], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Login já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.insertId });
  });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


