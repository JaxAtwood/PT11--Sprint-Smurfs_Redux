import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/index";
import { ADD_SMURF } from "../actions/index2";

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // error: "",
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
            case ADD_SMURF: {
                return {
                  ...state,
                  isFetching: true,
                  error: ""
                };
              }
              
        default:
            return state;
    }
}