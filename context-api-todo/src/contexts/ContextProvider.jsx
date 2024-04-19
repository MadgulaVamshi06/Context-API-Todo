import { createContext, useState } from "react";
import React from "react"
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  const removeTask = (todoId )=>{
    setTasks(tasks.filter(task => task.id !== todoId));
  }
  return (
    <TodoContext.Provider value={{tasks,addTask,removeTask}}>
      {children}
    </TodoContext.Provider>
  );
};
export { TodoContext, TodoProvider };
