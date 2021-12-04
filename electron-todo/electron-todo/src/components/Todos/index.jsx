import React from "react";
import Todo from "./Todo.jsx";
import "./index.scss"

const Todos = ({todos}) => {
    return (
        <ul className={"todos"}>
            {todos.map(todo => <Todo id={todo._id}
                                     key={todo._id}
                                     title={todo.title}
                                     type={todo.type}
                                     completed={todo.completed}
                                     createdTime={todo.createdTime}
                                     description={todo.description}
            />)}
        </ul>
    );
};

export default Todos;
