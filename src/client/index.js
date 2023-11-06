import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import store from '../redux/store';

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);
