import axios from "axios";
import { FETCH_SUCCESS, FETCH_FAILURE } from "../actions/index";

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF });
        axios
            .post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                console.log("post", res);
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })

            .catch(err => {
                console.log("error", err);
                dispatch({type: FETCH_FAILURE, payload: err.response })
        })
    }
    
   