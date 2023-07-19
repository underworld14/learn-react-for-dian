import style from "./style.module.css";

/* eslint-disable react/prop-types */
function TodoList({ name, todo, onDeleteTodo }) {
  return (
    <div className={style.todoList}>
      {name} - {todo}
      <button onClick={onDeleteTodo}>Delete</button>
    </div>
  );
}

export default TodoList;
