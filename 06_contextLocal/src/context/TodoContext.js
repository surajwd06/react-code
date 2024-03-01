import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplate: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export  function useTodo() {
  return useContext(TodoContext);
}
