import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { Provider } from 'react-redux'
import { Store } from './store'

ReactDOM.render(
    <Provider store={Store}>
        <Home />
    </Provider>,
    document.getElementById('root'));

