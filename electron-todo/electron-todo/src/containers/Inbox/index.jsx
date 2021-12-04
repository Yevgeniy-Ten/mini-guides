import React, {useEffect} from "react";
import "./index.scss"
import Todos from "../../components/Todos/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {axiosTodos} from "../../store/todosActions";

const Inbox = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    useEffect(() => {
        dispatch(axiosTodos())
    }, [])
    return (
        <main className={"inbox"}>
            <div className={"container"}>
                <div className="inbox__header">
                    <h1 className={"inbox__title"}>Inbox</h1>
                </div>
                <div className="inbox__body">
                    <Todos todos={todos}/>
                </div>
            </div>
        </main>
    );
};

export default Inbox;
