
import { getUserData } from "src/api/user";
import { USER_LOADING, USER_SUCCESS, USER_LOGOUT, USER_DATA } from "../types/login";
import Alert from '@material-ui/lab/Alert';


export const loginRequest = (userData) => {

    return new Promise((res, rej) => 
        setTimeout(() => {
            if(userData.name === "Admin" && userData.password === "123456") {
                res(userData)
            } else {
                rej("Такого пользователя нет");
            }
        }), 1000);
}

export const initLogin = (user) => async dispatch => {
    dispatch({
        type: USER_LOADING
    });

    try {
        const userData = await loginRequest(user);
        if(userData) {
            console.log('__SUCCESS__');
            dispatch({ type: USER_SUCCESS});
            localStorage.setItem("isAuth", true);
            
            return true;
        }
    } catch(err) {
        throw new Error(err);
    }
}

export const getUserInfo = () => async dispatch => {
    dispatch({
        type: USER_LOADING
    });

    try {
        const userData = await getUserData();
        dispatch({
            type: USER_DATA,
            payload: userData
        })
    } catch(err) {
        return <Alert>Такой пользователь не найден</Alert>
    }
}


export const logout = () => async dispatch => {
    dispatch({
        type: USER_LOADING
    });
    try {
        localStorage.removeItem("isAuth");
        dispatch({ type: USER_LOGOUT});
        window.location.replace("/");
    } catch(err) {
        throw new Error(err);
    }
}