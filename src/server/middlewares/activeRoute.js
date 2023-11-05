import { matchPath } from 'react-router-dom';
import routes from '../../routes';

/*
    Description: ActiveRoute middleware:
    routes.js is shared between the client and the server.
    The activeRoute will look for a route that matches the request url.
    If a route is found, it will contain the React Component 
    and the Redux dispatch function needed to initialize the store.
*/

function activeRoute(req, res, next) {
    const isStaticAsset = /\.(css|scss|js|jpg|svg|png|ico)$/i.test(req.url);

    if (isStaticAsset) {
        return res.end();
    }

    const activeRoute =
        routes.find(route => matchPath(route.path, req.url)) || {};

    req.app.activeRoute = activeRoute;
    next();
}

export default activeRoute;
