import "./index.css";

import { useState } from "react";
import TodoList from "./components/todo-list";
import InputTodo from "./components/input-todo";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   console.log("todos changed", todos);
  // }, [todos]);

  const addTodo = () => {
    const currentTodos = [...todos];
    currentTodos.push(input);
    setTodos(currentTodos);
    setInput("");
  };

  const deleteTodo = (index) => {
    const currentTodos = [...todos];
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  return (
    <main>
      <h1>Todo List</h1>

      <h2>{user.name}</h2>
      <img
        src={user.imageUrl}
        style={{
          marginBottom: "1rem",
          borderRadius: "50%",
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      <InputTodo input={input} setInput={setInput} onAddTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <TodoList key={index} name="Yusril Izza" todo={todo} onDeleteTodo={() => deleteTodo(index)} />
        ))}
      </div>
    </main>
  );
}

export default App;
