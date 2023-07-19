/* eslint-disable react/prop-types */
import style from "./style.module.css";

export default function InputTodo({ onAddTodo, input, setInput }) {
  return (
    <div className={style.inputContainer}>
      <input
        className={style.todoInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a new todo"
      />
      <button className="p-3 bg-slate-600 ml-2" onClick={onAddTodo}>
        Add Todo
      </button>
    </div>
  );
}
