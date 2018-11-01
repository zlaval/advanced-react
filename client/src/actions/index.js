import {AUTH_ERROR, AUTH_USER} from './types'
import axios from 'axios'


export const signup = ({email, password}, callback) => async dispatch => {
    try {
        const resp = await axios.post('http://localhost:3090/signup', {
            email, password
        });
        dispatch({
            type: AUTH_USER,
            payload: resp.data.token
        });
        localStorage.setItem('token', resp.data.token);
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Email is in use'
        })
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const signin = ({email, password}, callback) => async dispatch => {
    try {
        const resp = await axios.post('http://localhost:3090/signin', {
            email, password
        });
        dispatch({
            type: AUTH_USER,
            payload: resp.data.token
        });
        localStorage.setItem('token', resp.data.token);
        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Invalid login credential'
        })
    }
};