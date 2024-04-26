import React, { useState } from 'react';
import {db, auth } from '../../services/firebaseConnection';
import 'firebase/firestore';

import { addDoc, collection } from 'firebase/firestore'

const Formulario = () => {
    const [numeroVeiculo, setNumeroVeiculo] = useState('');
    const [catracaValidador, setCatracaValidador] = useState('');
    const [catracaFisica, setCatracaFisica] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [dataOcorrencia, setDataOcorrencia] = useState('');
    const [dataGravacao, setDataGravacao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            
            await addDoc(collection(db,'registros'), {
                numeroVeiculo,
                catracaValidador,
                catracaFisica,
                idUsuario,
                dataOcorrencia,
                dataGravacao,
            });
            alert('Registro adicionado com sucesso!');
            // Limpar os campos após o envio
            setNumeroVeiculo('');
            setCatracaValidador('');
            setCatracaFisica('');
            setIdUsuario('');
            setDataOcorrencia('');
            setDataGravacao('');
        } catch (error) {
            console.error('Erro ao adicionar registro:', error);
            alert('Ocorreu um erro ao adicionar registro.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Número do Veículo:
                <input type="text"
                    value={numeroVeiculo}
                    onChange={(e) => setNumeroVeiculo(e.target.value)} />
            </label>
            <label>
                Catraca Validador:
                <input type="text" value={catracaValidador} onChange={(e) => setCatracaValidador(e.target.value)} />
            </label>
            <label>
                Catraca Física:
                <input type="text" value={catracaFisica} onChange={(e) => setCatracaFisica(e.target.value)} />
            </label>
            <label>
                ID do Usuário:
                <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} />
            </label>
            <label>
                Data da Ocorrência:
                <input type="date" value={dataOcorrencia} onChange={(e) => setDataOcorrencia(e.target.value)} />
            </label>
            <label>
                Data de Gravação:
                <input type="datetime-local" value={dataGravacao} onChange={(e) => setDataGravacao(e.target.value)} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;