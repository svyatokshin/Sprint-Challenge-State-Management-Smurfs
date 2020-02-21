import { FETCH_SMURFS, UPDATE_SMURFS, SET_FETCH_ERROR, ADD_SMURF_START, ADD_SMURF_UPDATE, SET_ADD_ERROR, REMOVE_SMURF } from '../actions';

export const initialState = {
    village: [],
    isFetchingData: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isFetchingData:true,
                village: []
            };
        case UPDATE_SMURFS:
            return {
                ...state,
                isFetchingData: false,
                village: action.payload
            };
        case SET_FETCH_ERROR: 
            return {
                ...state,
                isFetchingData:false,
                error: action.payload
            };
        case ADD_SMURF_START:
            return {
                ...state,
                isFetchingData: true
            };
        case ADD_SMURF_UPDATE:
            console.log('reducer payload', action.payload);
            return {
                ...state,
                isFetchingData: false,
                village: action.payload.data
            };
        case SET_ADD_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case REMOVE_SMURF:
            return {
                ...state,
                isFetchingData: false,
                village: state.village.filter(smurf => {
                    return smurf.id !== action.payload;
                })
            }
        
        default:
            return state;
    }
};