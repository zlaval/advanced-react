import commentsReducer from '../comments'

import {SAVE_COMMENT} from "../../actions/types";

it('handles actions of type SAVE_COMMENT', () => {
    const newComment = 'New Comment';
    const action = {
        type: SAVE_COMMENT,
        payload: newComment
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual([newComment])
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'UNKNOWN'});
    expect(newState).toEqual([]);
});