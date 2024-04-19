import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/ContextProvider";

const TodoForm = () => {
  const { addTask } = useContext(TodoContext);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim()) {
        alert("Enter the Task")
        return;}
    addTask({ id: Date.now(), text: item });
    setItem(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter your task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
