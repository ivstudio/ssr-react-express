import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import { setEntryUrl } from '../../redux/actions/appActions';
import reducers from '../../redux/reducers';

/*
    The initializeStore middleware does the following:
    - Creates a Redux store with the reducers and the thunk middleware.
    - Calls the loadData function from the active route.
    - Dispatches the setEntryUrl action with the current URL.
    - Attaches the store to the res.app object.
*/

function initializeStore(req, res, next) {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    const { loadData } = req.app.activeRoute || {};

    const promise = loadData
        ? loadData(store.dispatch, req.path)
        : Promise.resolve();

    store.dispatch(setEntryUrl(req.url));

    res.app = {
        ...res.app,
        store,
        promise,
    };

    next();
}

export default initializeStore;
