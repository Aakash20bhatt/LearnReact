import React from "react";

export default class ClassTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            newTodo:''
        };
    }
    
    handleChange = ()=>{
        this.setState({newTodo: e.target.value})
    }
    render(){
        return(
            <div>
                <h1>I am Class Based Todo</h1>
                <input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
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