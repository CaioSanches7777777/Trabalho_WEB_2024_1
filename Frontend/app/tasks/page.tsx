import AddTask from "@/components/AddTask";
import DescribeTask from "@/components/DescribeTask";
import ListTask from "@/components/ListTask";
import TaskList from "@/components/ListTask";
import { TaskContextProvider } from "@/context/TaskContext";

const Tasks = ({}) => {
    return(
        <main className="h-screen">
            <h1 className="text-2xl sm:text4xl font-black traking-wide text-center pt-6 pb-10 sm:pb-24">Gestor de tarefas</h1>

            <div className="grid place-items-center">
                <TaskContextProvider>
                    <div className="w-screen">
                    <ListTask />
                    </div>
                    <AddTask />
                </TaskContextProvider>
            </div>
            
        </main>
    );
}
export default Tasks;