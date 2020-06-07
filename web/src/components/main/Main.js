import React, { useState, useEffect } from 'react';
import './style.css';

import api from '../../services/api';

import Item from '../item/Item';

const Main = () => {

    const [todos, setTodos] = useState([]);
    const [tarefa, setTarefa] = useState('');

    const updateTarefa = e => {
        setTarefa(e.target.value);
    }

    async function submit (e) {
        e.preventDefault();
        try {
            await api.post('/tarefas', {tarefa});
            setTarefa('');
        } catch (error){
            console.log(error);
        }
    }

    async function carregarTodos() {
        api.get('/tarefas')
        .then(response => {
            setTodos(response.data);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        carregarTodos();
    }, [submit]);

    return(
        <div className="main-container">

            <div className="form">
                <input type="text" placeholder="Escreva a tarefa aqui..." value={tarefa} onChange={updateTarefa} />
                <button className="borda" onClick={submit} >Adicionar tarefa</button>
            </div>
        
            <div className="list-container">
                <div className="list-group">

                    {
                        todos === '' ? <h1>Adicione tarefas acima</h1> : todos.map(todo => (
                            <Item key={todo._id} id={todo._id} tarefa={todo.tarefa} />
                        ))
                    }
                    
                </div>
            </div>

        </div>
    );
}

export default Main;