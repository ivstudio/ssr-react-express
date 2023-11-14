import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import App from '../App';
import Html from '../components/Html';

/*
   Reference:
    https://react.dev/reference/react-dom/server/renderToPipeableStream 
*/
export default (req, res) => {
    const store = req.app.store;
    const metaData = { title: 'your page' };
    const stream = ReactDOMServer.renderToPipeableStream(
        <React.StrictMode>
            <Html>
                <Provider store={store}>
                    <StaticRouter location={req.url}>
                        <App data={{ metaData }} />
                    </StaticRouter>
                </Provider>
            </Html>
        </React.StrictMode>,
        {
            bootstrapScripts: ['bundle.js'],
            onShellReady() {
                res.statusCode = 200;
                res.setHeader('content-type', 'text/html');
                stream.pipe(res);
            },
            onShellError(error) {
                res.statusCode = 500;
                res.setHeader('content-type', 'text/html');
                res.send('<h1>Something went wrong</h1>');
            },
            onError(error) {
                res.statusCode = 404;
                console.error(error);
            },
        }
    );
    setTimeout(() => {
        stream.abort();
    }, 10000);
};
