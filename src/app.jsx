import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import Index from './components/index.jsx';
import reducers from './reducers';
import Style from './styles/main.scss';

const store = createStore(reducers,{},compose(applyMiddleware(reduxThunk)));

render (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Index}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
