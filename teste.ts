import React, { useState } from 'react';

const RegisterOperationScreen = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSaveTask = () => {
        // Lógica para salvar a tarefa
        console.log('Tarefa salva:', {
            taskName,
            taskDescription,
            startDate,
            endDate,
            startTime,
            endTime,
        });
    };

    return (
        <div style={{ background: 'linear-gradient(135deg, #5ff2ff, #27727d)' }}>
            <h1>Registro de Operação</h1>
            <input
                type="text"
                placeholder="Nome da Tarefa"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                aria-label="Nome da Tarefa"
            />
            <textarea
                placeholder="Descrição da Tarefa"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                aria-label="Descrição da Tarefa"
            ></textarea>
            <input
                type="date"
                placeholder="Data de Início"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                aria-label="Data de Início"
            />
            <input
                type="date"
                placeholder="Data Final"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                aria-label="Data Final"
            />
            <input
                type="time"
                placeholder="Hora Inicial"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                aria-label="Hora Inicial"
            />
            <input
                type="time"
                placeholder="Hora Final"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                aria-label="Hora Final"
            />
            <button onClick={handleSaveTask}>Salvar Tarefa</button>
        </div>
    );
};

export default RegisterOperationScreen;
