const express = require('express');
const mongoose = require('mongoose');
const TarefaModel = require('./Models/Tarefa');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Conectando a base de dados do mongoose
mongoose.connect('mongodb+srv://rafacoelho4:rafael12@cluster0-59utl.mongodb.net/tarefasbacon?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333, () => console.log('Funcionando'));