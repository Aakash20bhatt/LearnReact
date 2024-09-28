import React from "react";

export default class ClassTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            newTodo:''
        };
    }
    
    handleChange = (e)=>{
        this.setState({newTodo: e.target.value})
    }

    handleTodo = ()=>{
        this.setState((state)=>{
            return{
                todos:[...this.state.todos, state.newTodo],
                newTodo : ''
            }
        })
    }

    render(){
        return(
            <div>
                <h1>I am Class Based Todo</h1>
                <input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
                <button onClick={this.handleTodo}>Add Todo</button>
                <ul>
                    {this.state.todos.map((item)=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}