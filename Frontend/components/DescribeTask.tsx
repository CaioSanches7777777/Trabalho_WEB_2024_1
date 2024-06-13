'use client'

//teste para fazer a descrição da task aparecer do mesmo jeito que quando uma nova task é inserida

import React, { useContext, useState } from "react";
import { TaskContext, Task, Stage } from "@/context/TaskContext";

const DescribeTask = ({}) => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="tabcontent">
            {tasks.map((task:Task, index:number) => (
                <div>
                    <h3 className="text-xl">{task.taskName}</h3>
                    <p className="mb-4">{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default DescribeTask;