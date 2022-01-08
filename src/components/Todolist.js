import React from 'react';
import Todo from "./Todo";

const todolist = ({todos}) =>{
    console.log(todos);

    return(
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </ul>
        </div>
    );
    
};

export default todolist;