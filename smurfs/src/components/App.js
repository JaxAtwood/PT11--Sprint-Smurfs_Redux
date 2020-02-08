import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";
import "./App.css";

import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";

const App = (props) => {
console.log(props);

  React.useEffect(() => {
    props.fetchSmurf();
  }, []);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Meet Smurf 1!</div>
        <div>He's lonely.... let's give Smurf 1 a friend!</div>
          <div>
            <AddSmurf />
            <div>
              {props.smurfs.map(smurf => (
                <Smurf name={smurf.name} height={props.height} age={props.age}/>
               ))}
            </div>
          </div>
      </div>
    );
  }

  const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchSmurf: state.fetchSmurf,
    error: state.error
  });
  
  export default connect(
    mapStateToProps,
    { fetchSmurf }
  )(App);


