import axios from 'axios';
import {CHANGE_AUTH, FETCH_COMMENTS, SAVE_COMMENT} from "./types";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const url = 'http://jsonplaceholder.typicode.com/comments';
    const response = axios.get(url);
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}