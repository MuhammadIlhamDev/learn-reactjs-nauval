import { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState("");

  function removeTodoHandler(todoID) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoID;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
    console.log(todo);
  }

  function cancelEditHandler() {
    setActivity("");
    setEdit({});
  }

  function generatorId() {
    return Date.now();
  }

  function saveTodoHandler(e) {
    console.log(e);
    e.preventDefault();

    if (!activity) {
      return setMessage("Please add an activity");
    }

    if (edit.id) {
      const updateTodo = {
        ...edit,
        activity,
      };

      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updateTodo;

      return setTodos(updatedTodos);
    }

    setTodos([...todos, { id: generatorId(), activity, done: false }]);
    setActivity("");
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>simple todo list</h1>
      {message}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="add todo"
          value={activity}
          onChange={function (e) {
            setActivity(e.target.value);
            setMessage("");
          }}
        />
        <button type="submit">{edit.id ? "edit" : "add"}</button>
        {edit.id && (
          <button type="button" onClick={cancelEditHandler}>
            Cancel
          </button>
        )}
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                />
                {todo.activity}({todo.done ? "done" : "not done"})
                <button
                  type="button"
                  onClick={editTodoHandler.bind(this, todo)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={removeTodoHandler.bind(this, todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}

export default Todo;
