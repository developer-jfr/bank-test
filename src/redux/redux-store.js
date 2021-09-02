import {createStore ,applyMiddleware, combineReducers, Action} from 'redux'
import thunkMiddliware, {ThunkAction} from 'redux-thunk'
import { authReducer } from './reducers/auth-reducer';
import { bankReducer } from './reducers/bank-reducer';


const rootReducer  = combineReducers({
   auth: authReducer,
   
   bank: bankReducer
})





export const store  = createStore(rootReducer, applyMiddleware(thunkMiddliware));