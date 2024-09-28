import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <h1>Hello World, {this.props.name}</h1>
      </div>
    );
  }
}

export default ClassCounter;
