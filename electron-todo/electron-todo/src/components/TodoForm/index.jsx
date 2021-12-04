import React, {useEffect} from "react";
import "./index.scss"
import useForm from "../../hooks/useForm";

const TodoForm = ({onSubmit, isLoading, isCreated}) => {
    const {binder, values, clearForm} = useForm({
        title: "",
        description: ""
    })
    const onSHandler = (e) => {
        e.preventDefault()
        onSubmit(values)
    }
    useEffect(() => {
        if (isCreated) clearForm()
    }, [isCreated])
    return (
        <form onSubmit={onSHandler}>
            <div className={"todo-form"}>
                <label>
                    <input {...binder.title} className="todo-form__input" type="text" placeholder={"Title"}/>
                </label>
                <label>
                    <textarea {...binder.description} rows={4} className="todo-form__textarea"
                              placeholder={"Description"}/>
                </label>
                <button className="todo-form__btn" disabled={isLoading} type={"submit"}>Add your todo</button>
            </div>
        </form>
    );
};

export default TodoForm;
