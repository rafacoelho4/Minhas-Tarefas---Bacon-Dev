import React from 'react';
import './style.css';

import api from '../../services/api';

import { MdDelete } from "react-icons/md";

const Item = (props) => {

    async function excluirTarefa(idTarefa) {
        await api.delete(`/tarefas/${idTarefa}`)
        .then((response) => {
            console.log('Tarefa excluida com sucesso')
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div className="item-container">
            <div className="text-group">
                <p>{props.tarefa}</p>
            </div>
            <button onClick={() => excluirTarefa(props.id)} ><MdDelete  className="trash" /></button>
        </div>
    );
}

export default Item;