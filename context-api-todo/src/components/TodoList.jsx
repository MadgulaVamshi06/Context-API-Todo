import { TodoContext } from "../contexts/ContextProvider";
import { useContext } from "react";
import React from "react"

const TodoList = () => {
     const {tasks,removeTask} = useContext(TodoContext);
     console.log(tasks);
    return(
        <div>
           
            {tasks.map(task =>(
             
                <div  key = {task.id}>
                {task.text}
                <button onClick={()=> removeTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodoList