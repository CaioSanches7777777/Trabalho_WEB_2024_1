//ela que faz a gestão (incluir e remover itens) da lista de tarefas
'use client'

import React, {createContext, useState} from "react";


// +/- igual a um vetor
export enum Stage{
    Backlog,
    ToDo,
    Doing,
    Done
}

export type Task = {
    taskName: string;
    description: string;
    stage: Stage
}

type TaskContextType = {
    tasks: Task[];
    addTask: (name:string ,description:string) => void;
    removeTask: (taskIndex:number) => void;
    changeStage: (taskIndex:number, new_stage:Stage) =>void;
}

export const TaskContext = createContext({} as TaskContextType);

export const TaskContextProvider = ({ children }: Readonly<{children: React.ReactNode;}>) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (taskName:string ,description: string) => {
        let newTask = {
            taskName,
            description, 
            stage: Stage.Backlog
        }
        if(taskName!= '' && description != '') setTasks([...tasks, newTask]);
    };

    const removeTask = (taskIndex: number) => {
        setTasks(tasks.filter((_:Task, index:number) => taskIndex !== index)); //filtra o array de tarefas pelo index das tarefas, ignorando o valor do conteúdo
    };

    /*
    const describeTask = (taskIndex: number) => {

    }
    */

    const changeStage = (taskIndex:number, new_stage:Stage) => {
        tasks[taskIndex].stage = new_stage;
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, changeStage }}>
            {children}
        </TaskContext.Provider>
    )
};