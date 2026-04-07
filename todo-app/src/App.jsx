import { useState } from "react";
import Header from "./component/Header";
import ToDoList from "./component/ToDoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add Task
  const addTodo = () => {
    if (!input.trim()) return;
    const trimmedInput = input.trim().toLowerCase();

    if (!trimmedInput) return;

  //  Check duplicate
  const isDuplicate = todos.some(
    (todo) => todo.text.toLowerCase() === trimmedInput
  );

  if (isDuplicate) {
    alert("Task already exists!");
    return;
  }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };


  // Delete Task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Task
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header />

      <div className="input-box">
        <input
          type="text"
          placeholder="Add task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;