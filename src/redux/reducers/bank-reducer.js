import { actions } from '../actions/auth-actions';

const initialState = {
    bank: [] 
}

export const bankReducer = (state = initialState, action) => {
    switch(action.type) {
   case 'GT/DATA/GET_DATA': {
    return {
        ...state,
        bank:  action.payload.data
    }
   }
   default: return state

    }
}

