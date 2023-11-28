import { matchPath } from 'react-router-dom';

import routes from '../../routes';

/*
   The activeRoute middleware does the following:
    - Checks if the request is for a static asset.
    - Finds the active route that matches the request URL.
    - Attaches the active route to the req.app object.
*/

function activeRoute(req, res, next) {
    const isStaticAsset = /\.(css|scss|js|jpg|svg|png|ico)$/i.test(req.url);

    if (isStaticAsset) {
        return res.end();
    }

    function getActiveRoute() {
        return routes.find(route => matchPath(route.path, req.url)) || {};
    }

    res.app.activeRoute = getActiveRoute();
    next();
}

export default activeRoute;
