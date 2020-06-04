const express = require('express');

const TarefaModel = require('../Models/Tarefa');

module.exports = {

    // Criando uma nova tarefa
    async create (request, response) {
        
        const { tarefa } = request.body;

        try {
            const Todo = await TarefaModel.create({
                tarefa
            });
            return response.status(202).send(tarefa);
        }
        catch(err) {
            console.log('erro no create');
            return response.status(404).send({ error: 'Erro ao criar tarefa'});
        }
    },

    // Listando todas as tarefas
    async index (request, response) {
        
        try {
            const tarefas = await TarefaModel.find();
            return response.status(202).send(tarefas);
        }
        catch(err) {
            return response.status(404).send({ error: 'Erro ao listar tarefas'});
        }
    },

    // Deletando uma tarefa
    async destroy(request, response) {
        
        const idTarefa = request.params.id;

        console.log('tentando deletar')
        console.log(idTarefa);

        try {
            
            const verificaTarefa = await TarefaModel.findOne({ _id: idTarefa });

            if(!verificaTarefa) return response.status(404).send({ error: 'Tarefa não encontrada' });
            else {
                await TarefaModel.deleteOne({_id: idTarefa});
                return response.status(202).send({ ok: 'Tarefa deletada com sucesso', idTarefa });
            }
            
        }
        catch(err) {
            return response.status(404).send({ error: 'Erro ao deletar tarefas'});
        }
    }

}