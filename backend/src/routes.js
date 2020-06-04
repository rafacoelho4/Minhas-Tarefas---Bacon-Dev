const { Router } = require('express');

const TarefaController = require('./Controllers/TarefaController');

const routes = Router();

// Rota para adicionar uma nova tarefa
routes.post('/tarefas', TarefaController.create);

// Rota para listar todas as tarefas
routes.get('/tarefas', TarefaController.index);

// Rota para deletar uma certa tarefa
routes.delete('/tarefas/:id', TarefaController.destroy);

module.exports = routes;