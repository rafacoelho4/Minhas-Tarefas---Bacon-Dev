import React from 'react';
import './style.css';

import api from '../../services/api';

import { MdDelete } from "react-icons/md";

const Item = ({ tarefa }) => {

    // async function excluirTarefa(e, idTarefa) {
    //     e.preventDefault();
    //     await api.delete(`/membros/${idTarefa}`)
    //     .then((response) => {

    //     })
    // }

    return(
        <div className="item-container">
            <div className="text-group">
                <p>{tarefa}</p>
            </div>
            <button><MdDelete  className="trash" /></button>
        </div>
    );
}

export default Item;