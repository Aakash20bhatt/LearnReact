import React from 'react';

class ClassCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.handleClick = this.handleClick.bind(this);
    }
    
    render(){
        return(
            <div>
                <h1>Hello World, {this.props.name}</h1>
            </div>
        )
    }
}

export default ClassCounter;