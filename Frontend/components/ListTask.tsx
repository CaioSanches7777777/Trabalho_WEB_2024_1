'use client'

import React, {useContext, useState} from "react";
import { TaskContext, Task, Stage } from "@/context/TaskContext";
import Select from "react-dropdown-select";
import DescribeTask from "./DescribeTask";

const ListTask = ({}) => {

    const [selected, setSelected] = useState<Stage>(Stage.Backlog);
    const { tasks, removeTask, changeStage } = useContext(TaskContext);
    const options = (Object.keys(Stage)
                    .filter((item) => isNaN(Number(item)))
                    ).map((item, index) => ({
                        label: item, 
                        value: index
                    }));
                    
    const [selectedTab, setSelectedTab] = useState(0);

    let selectOptions = [
        {
            value:0,
            stage:"Backlog"
        },
        {
            value:1,
            stage:"ToDo"
        },
        {
            value:2,
            stage:"Doing"
        },
        {
            value:3,
            stage:"Done"
        }
    ];

    

    return (
        <div className="flex flex-col  gap-4 sm:items-center sm:justify-between mb-8 sm:mb-8">
            <h2 className="text-2xl font-semibold">Minhas tarefas</h2>

            <div className="flex gap-2 text-gray-600">
            {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(option.value)}
                        className={selectedTab === option.value ? 'active-tab' : ''}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div className="flex">
            <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                {tasks.map((task:Task, index:number) => (
                    
                    <li className={`flex flex-center gap-2 mb-2 ${task.stage !== selectedTab ? 'hidden':''}`} key={index}>
                        
                        <div className="flex flex-center gap-2 mb-2 text-center" >
                            <button >
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12H15" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 9L12 15" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="1.5"/>
                                </svg>
                            </button>

                            {task.taskName} 

                            <Select 
                                options={options} 
                                values={[options[task.stage]]}
                                labelField="label" 
                                valueField="value" 
                                onChange={(values) => changeStage(index, values[0].value)}
                            />

                            <button onClick={() => removeTask(index)}>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="fff" d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        
                        
                    </li>

                ))}
            </ul>
            <DescribeTask/>
            </div>

        </div>
    );
};

export default ListTask;

/*
return (
        <div className="flex flex-col  gap-4 sm:items-center sm:justify-between mb-8 sm:mb-8">
            <h2 className="text-2xl font-semibold">Minhas tarefas</h2>

            <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                {tasks.map((task:Task, index:number) => (

                    <li key={index} className="flex flex-center gap-2 mb-2 text-center">
                        {task.description}
                        
                        <button onClick={() => removeTask(index)}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="fff" d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </li>

                ))}
            </ul>

        </div>
    );
*/