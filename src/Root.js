import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from 'reducers'

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};