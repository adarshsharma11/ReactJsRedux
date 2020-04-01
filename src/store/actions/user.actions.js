import { LOGIN,SIGNUP,LOGOUT } from "../constants/constants";
import {API_URL} from "../../helpers/constants/constants";
import {loading} from "./app.actions";
import history from "../history";
import Swal from 'sweetalert2'

//login user
export const login = (email:string,password:string) => async dispatch => {
    dispatch(loading())
    const settings = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body:new URLSearchParams({email:email,password:password})
    };
    try {
        const fetchResponse = await fetch(API_URL+'auth/login', settings);
        const data = await fetchResponse.json();
        if(typeof  data['id_jwt'] != "undefined" ) {
            dispatch(loading(false))
            dispatch({
                type: LOGIN,
                payload: {
                    loggedIn: true,
                    user_id: data['id'],
                    jwt_id: data['id_jwt']
                }
            })
            history.push("/dashboard");
        }else{
            dispatch(loading(false))
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    } catch (error) {
        dispatch(loading(false))
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } finally {
        dispatch(loading(false))
    }
};
//signup user
export const signUp = (email:string,password:string,firstName:string,lastName:string)  => async dispatch => {
    dispatch(loading())
    const settings = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body:new URLSearchParams({email:email,password:password,first_name:firstName,last_name:lastName})
    };
    try {
        const fetchResponse = await fetch(API_URL+'register', settings);
        const data = await fetchResponse.json();
        if(  Object.keys(data).length === 0 ) {
            dispatch(loading(false))
            Swal.fire({
                title: 'Cheers!',
                text: "A verification email has been sent to you.Click on the link inside it to complete registration",
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            history.push("/");
        }else{
            dispatch(loading(false))
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    } catch (error) {
        dispatch(loading(false))
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } finally {
        dispatch(loading(false))
    }
}
//forgot password
export const forgotPassword = (email:string) => async dispatch => {
    dispatch(loading())
    const settings = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body:new URLSearchParams({email:email})
    };
    try {
        const fetchResponse = await fetch(API_URL+'register/reset-password-email', settings);
        const data = await fetchResponse.json();
        if(  Object.keys(data).length === 0 ) {
            dispatch(loading(false))
            Swal.fire({
                title: 'Cheers!',
                text: "We have sent you an email with instructions about resetting your password.\n Please check your email and follow the instructions to complete the process",
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            history.push("/");
        }else{
            dispatch(loading(false))
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    } catch (error) {
        dispatch(loading(false))
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } finally {
        dispatch(loading(false))
    }
};


//logout user
const userLogout = () => ({
    type: LOGOUT,
});
export const doLogout = () => dispatch => {
    dispatch(userLogout());
};
