import React, { useState, useEffect } from 'react';
import './style.css';

import api from '../../services/api';

import Item from '../item/Item';

const Main = () => {

    //const [todos, setTodos] = useState(['Arrumar cama', 'Fechar projeto', 'Cozinhar']);
    const [todos, setTodos] = useState([]);
    const [tarefa, setTarefa] = useState('');

    const [listaDeTarefas, setListaDeTarefas] = useState([]);

    const updateTarefa = e => {
        setTarefa(e.target.value);
    }

    async function submit (e) {
        e.preventDefault();
        try {
            const response = await api.post('/tarefas', {tarefa});
            setTarefa('');

        } catch (error){
            console.log(error);
            console.log('erro no submit')
        }
    }

    // async function excluirTarefa(e, idTarefa) {
    //     e.preventDefault();
    //     await api.delete(`/tarefas/${idTarefa}`)
    //     .then((response) => {
    //         console.log('Tarefa excluida com sucesso no front.');
    //     }).catch((error) => {
    //         console.log(error);
    //     }); 
    // }

    async function carregarTodos() {
        console.log('iniciando carregar todos')
        //const response = await api.get('/tarefas');

        const response = await api.get('/tarefas').then(response => {
            
            const tarefa = response.data.map(tar => tar.tarefa);

            setTodos([...todos, tarefa]);

            console.log(tarefa)
            console.log(listaDeTarefas, 'lista de tarefas')

        });

        //setTodos([...todos, response.data])

        console.log('-');
        console.log(todos);
    }

    // function doNada () {
    //     console.log('faz nada')
    // }

    // const noTodos = (todos) => {
    //     if(todos === '') {
    //         return(
    //             <h1>Adicione tarefas</h1>
    //         );
    //     }
    //     else {
    //         return(
    //             <div className="list-group">
    //                 {todos.map((todo)=>{
    //                     return(
    //                         <Item tarefa={todo} />
    //                     );
    //                 })}
    //             </div>  
    //         );
    //     }
    // }

    useEffect(() => {
        carregarTodos();
    }, []);

    return(
        <div className="main-container">

            <div className="form">
                <input type="text" placeholder="Escreva a tarefa aqui..." value={tarefa} onChange={updateTarefa} />
                <button className="borda" onClick={submit} >Adicionar tarefa</button>
            </div>
        
            <div className="list-container">
                {/* <div className="list-group">
                    {todos.map(todo => (
                        <h1>{todo.tarefa}</h1>
                    ))}
                </div> */}
            </div>

        </div>
    );
}

export default Main;