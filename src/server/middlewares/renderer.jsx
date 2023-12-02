import * as React from 'react';

import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import App from '../../App';

/*
    The renderer middleware does the following:
    - Gets the current Redux state.
    - Converts the state to a JSON string.
    - Renders the App component to a string.
    - Returns the HTML with the rendered App component and the state.
*/

export default (req, res) => {
    const { store } = res.app;
    const state = store.getState();
    const preloadedState = JSON.stringify(state).replace(/</g, '\\u003c');

    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <App />
                </StaticRouter>
            </Provider>
        </React.StrictMode>
    );

    return `
    <!DOCTYPE html>
    <html class="no-js" lang="en">
        <head>
          <title>React Redux Express SSR</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="/main.css">
          <meta name="description" content="ssr react express redux boilerplate">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${preloadedState}
          </script>
          <script src="bundle.js"></script>
        </body>
    </html>
  `;
};
