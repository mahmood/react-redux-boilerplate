import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reduxThunk} from 'redux-thunk';

import Index from './components/index.jsx';
import reducers from './reducers';
import Style from './styles/main.scss';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);

render (
    <Provider store={storeWithMiddleware(reducers)}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);
