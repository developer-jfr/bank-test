
const initialState = {
    users: [],
    isLogined: false,
    isAuthorized: false,
    showAlert: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'US/CR/CREATE_USERS': {
            return {
                ...state,
                users: action.payload.user
            }
        }
      
        case 'US/TG/TOGLE_IS_AUTHORIZED': {
            return {
                ...state,
                isAuthorized: action.payload.isAuthorized
            }
        }
        case 'US/TG/TOGGLE_IS_LOGINED': {
            return {
                ...state,
                isLogined: action.payload.isLogined
            }
        }
       
        default: return state
    }
}


