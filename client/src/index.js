import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import reduxThunk from 'redux-thunk'

import App from './componenets/App';
import Welcome from './componenets/Welcome';
import Signup from "./componenets/auth/Signup";
import reducers from "./reducers";
import Feature from "./componenets/Feature";
import Signout from './componenets/auth/Signout'
import Signin from './componenets/auth/Signin'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {
        auth: {authenticated: localStorage.getItem('token')}
    },
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/feature" exact component={Feature}/>
                <Route path="/signout" exact component={Signout}/>
                <Route path="/signin" exact component={Signin}/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);