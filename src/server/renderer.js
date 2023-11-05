import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from '../App';

export default req => {
    const store = req.app.store;
    const preloadedState = store.getState();

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
    <html>
        <head>
          <title>React Redux Express SSR</title>
          <link href="main.css" rel="stylesheet">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(
                preloadedState
            ).replace(/</g, '\\u003c')}
          </script>
          <script src="/bundle.js"></script>
        </body>
    </html>
  `;
};
