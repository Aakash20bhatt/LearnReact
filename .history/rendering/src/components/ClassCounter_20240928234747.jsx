import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = { count: 0 };
  }
   
  incrementCount = ()=>{
    this.setState({count:this.state.count+1})
  }
  
  render() {
    return (
      <div>
        <h1>Hello World, {this.props.name}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default ClassCounter;
