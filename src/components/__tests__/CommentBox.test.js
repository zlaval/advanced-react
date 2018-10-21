import React from 'react';
import {mount} from 'enzyme'
import CommentBox from '../CommentBox'

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    const comment = 'new comment';
    wrapped.find('textarea').simulate('change', {
        target: {value: comment}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(comment);
});

it('when form is submitted, text area gets emptied', () => {
    const comment = 'new comment';
    wrapped.find('textarea').simulate('change', {
        target: {value: comment}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(comment);
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
});