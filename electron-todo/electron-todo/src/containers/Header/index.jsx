import React from "react";
import Menu from "../../components/Menu.jsx";
import "./index.scss"

const Header = () => {
    return (
        <div className={"header"}>
            <div className="container">
                <div className="header__body flex">
                    <Menu/>
                    <h2 className={"text-center"}>
                        Удачи сегодня!
                    </h2>
                    <span>{new Date().toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
