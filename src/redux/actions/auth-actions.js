import {usersAPI} from '../../api/api'
export const actions  = {
    createUsersAC : (user) => ({type: 'US/CR/CREATE_USERS', payload: {user}}  ),

 togleIsAuthorizedAC : (isAuthorized) => ({type: 'US/TG/TOGLE_IS_AUTHORIZED', payload: {isAuthorized}}  ),
 toggleIsLogined : (isLogined) => ({type: 'US/TG/TOGGLE_IS_LOGINED', payload: {isLogined}}  )

}


export const createUsersThunk = (username, email, password) => {
    return async (dispatch) => {
        dispatch(actions.togleIsAuthorizedAC(false));
        let response = await usersAPI.signUp(username, email, password);
        dispatch(actions.togleIsAuthorizedAC(true))
        dispatch(actions.createUsersAC(response.data));
    }
}


export const loginUsersThunk = (username, password) => {
    return async (dispatch) => {
      try {
        dispatch(actions.toggleIsLogined(false));
        let response = await usersAPI.login(username, password);
        dispatch(actions.toggleIsLogined(true));
        dispatch(actions.createUsersAC(response.data));
      } catch(error) {
          console.log(error.message)
      }
    }
}

