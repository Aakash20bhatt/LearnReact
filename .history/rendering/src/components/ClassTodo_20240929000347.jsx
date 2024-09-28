import React from "react";

export default class ClassTodo extends React.Component{
    render(){
        return(
            <div>
                <h1>I am Class Based Todo</h1>
                <input type="text" />
                <button>Add Todo</button>
                <ul>
                    <li>Task1</li>
                    <li>Task2</li>
                    <li>Task3</li>
                </ul>
            </div>
        )
    }
}