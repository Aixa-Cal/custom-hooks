import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
      const handleNewTodo = (todo) => {
        const action = {
          type: "[TODO] Add Todo",
          payload: todo,
        };
        dispatch(action);
      };
    
      const handleDeletTodo = (id) => {
        dispatch({
          type: "[TODO] Remove Todo",
          payload: id,
        });
      };
    
      const handleToogleTodo = (id) => {
        dispatch({
          type: "[TODO] Toggle Todo",
          payload: id,
        });
      };


      return{
        todos,
        handleDeletTodo,
        handleNewTodo,
        handleToogleTodo,
        todosCount: todos.length,
        pendingTodos:todos.filter(todo => !todo.done).length,
    }
}
