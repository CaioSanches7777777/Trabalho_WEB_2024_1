'use client' //para rodar como se fosse do lado do cliente

//'use server' //para rodar como se fosse do lado do servidor

import React, { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";

const AddTask = ({}) => {
    
    const { tasks, addTask } = useContext(TaskContext);
    const [description, setDescription] = useState('');
    const [taskName, setName] = useState('');

    const saveTask = (e: {preventDefault: () => void}) => {
        e.preventDefault();
        console.log('Lista antes de incluir: ' + tasks);
        setName('');
        setDescription('');
        addTask(taskName, description);
    }

    return (
        <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-600">Adicionar tarefa</h3>
            <form onSubmit={saveTask}>

                <input type="text" placeholder="Nomeie a tarefa" className="border border-gray-500 px-4 py-2 rounded-lg" name="TaskName" value={taskName} onChange={(e) => setName(e.target.value)}>
                </input>

                <input type="text" placeholder="Descreva a tarefa" className="border border-gray-500 px-4 py-2 rounded-lg" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
                </input>

                <br />

                <button className="mt-3 bg-gray-600 text-white p-2 rounded-lg" type="submit" onClick={() => console.log('Clicou no botão.')}>
                    Incluir
                </button>

            </form>
        </div>
    );
};

export default AddTask;