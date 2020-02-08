import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/index2";

const AddSmurf = (props) => {
    const [name, setName] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [age, setAge] = React.useState("");
  
    const addNewSmurf = e => {
      e.preventDefault();
      const newSmurf = {
        name: name,
        age: age,
        height: height
      };
      props.addSmurf(newSmurf);
      setName("");
      setAge("");
      setHeight("");
    };
  

    return (
    <>
   <form onSubmit={addNewSmurf}>
   <input
          onChange={e => setName(e.target.value)}
          placeholder="name"
          value={name}
          name="name"
          required
        />
        <input
          onChange={e => setHeight(e.target.value)}
          type="number"
          placeholder="height"
          value={height}
          name="height"
          required
        />
        <input
          type="number"
          onChange={e => setAge(e.target.value)}
          value={age}
          placeholder="age"
          name="age"
          required
        />
            <button type="submit">Add Smurf</button>
    </form>
    </>
    )
}

export default connect(
    null,
    { addSmurf }
  )(AddSmurf);