import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import Index from './components/index.jsx';
import reducers from './reducers';
import Style from './styles/main.scss';

const store = createStore(reducers);

render (
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);
