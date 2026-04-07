import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}   // ✅ unique key
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;