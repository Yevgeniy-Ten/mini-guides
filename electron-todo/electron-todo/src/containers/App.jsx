import React from "react";
import Header from "./Header/index.jsx";
import Inbox from "./Inbox/index.jsx";
import Index from "./Footer/index.jsx";
import AddTodo from "./AddTodo/index.jsx";
// HEADER С ЦИТАТОЙ НАДО БУДЕТ СДЕЛАТЬ сегодняшней датой
const App = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <Inbox/>
            <Index/>
            <AddTodo/>
        </div>
    );
};

export default App;
