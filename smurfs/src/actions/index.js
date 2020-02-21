import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_UPDATE = 'ADD_SMURF_UPDATE';
export const SET_ADD_ERROR = 'SET_ADD_ERROR';
export const REMOVE_SMURF = 'REMOVE_SMURF';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log('.then response fetch smurfs ', res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: SET_FETCH_ERROR, payload: 'Error Fetching Smurfs'})
        });
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_UPDATE, payload: res});
        })
        .catch(err => {
            dispatch({ type: SET_ADD_ERROR, payload: "Error Adding Smurf"})
        })
}

export const removeSmurf = (id) => dispatch => {
    dispatch({ type: REMOVE_SMURF, payload: id})
}