import React from "react";

const Smurf = props => {
    console.log("here", props)
    return (
      <div>
        <p>I am {props.name}!</p>
        <p>I am {props.height}'s tall.</p>
        <p>I am {props.age} years old</p>
      </div>
    );
  };

  export default Smurf;