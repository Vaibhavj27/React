import { createContext,useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: "Buy milk",
            completed: false 
        }
    ],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: ()=>{  },
    toggleComplete: () => {}
})


export const useTodo=()=>{
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider