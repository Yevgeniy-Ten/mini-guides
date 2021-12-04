import React from "react";
import "./index.scss"
import taskImg from "../../components/Todos/task.png"
import TodoForm from "../../components/TodoForm/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {hideForm} from "../../store/todosReducer";
import {axiosCreateTodo} from "../../store/todosActions";

const AddTodo = () => {
    const formIsOpen = useSelector(state => state.todos.formIsOpen)
    const isLoading = useSelector(state => state.todos.isLoading)
    const isCreated = useSelector(state => state.todos.isCreated)
    const dispatch = useDispatch()
    const onHideForm = () => dispatch(hideForm())
    const onAddTodo = (todo) => dispatch(axiosCreateTodo(todo))
    const todoAddCls = ["todo-add"]
    if (formIsOpen) {
        todoAddCls.push("active")
    }
    return (
        <div className={todoAddCls.join(" ")}>
            <div className="container">
                <div className="todo-add__header">
                    <button onClick={onHideForm} className={" todo-add__btn todo-add__btn--return"}/>
                    <h3>Add new todo</h3>
                    <div/>
                </div>
                <div className="todo-add__body">
                    <div className="todo-add__body-header flex center">
                        <img src={taskImg} alt="new todo"/>
                    </div>
                    <div className="todo-add__form">
                        <TodoForm isCreated={isCreated} isLoading={isLoading} onSubmit={onAddTodo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
