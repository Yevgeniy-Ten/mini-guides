import React from "react";
import "./index.scss"
import FilterItems from "../FilterItems.jsx";
import {useDispatch} from "react-redux";
import {showForm} from "../../store/todosReducer";

const Footer = () => {
    const dispatch = useDispatch()
    const onShowForm = () => dispatch(showForm())
    return (
        <>
            <div className="footer__height"/>
            <div className={"footer"}>
                <div className="container">
                    <div className="footer__body">
                        <FilterItems/>
                        <button onClick={onShowForm} className="footer__btn add">+</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
