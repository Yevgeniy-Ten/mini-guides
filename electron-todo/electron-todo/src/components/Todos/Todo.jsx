import React from "react";
import "./index.scss"

const Todo = ({title, createdTime, description, id, type, completed}) => {
    const checkBtnCls = ["todo__btn", "todo__btn--check"]
    const todoCls = ["todo"]
    if (completed) {
        checkBtnCls.push("active")
        todoCls.push("active")
    }
    return (
        <li className={todoCls.join(" ")}>
            <div className="todo__body">
                <div className="todo__img"/>
                <div className="todo__info">
                    <h5 className={"todo__title"}>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className="todo__actions">
                <small>{new Date(createdTime).toLocaleTimeString().slice(0, 5)}</small>
                <label className={checkBtnCls.join(" ")}>
                    <input type="checkbox"/>
                </label>
                <button className={"todo__btn todo__btn--remove"}>&times;</button>
            </div>
        </li>
    );
};

export default Todo;
