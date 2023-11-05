import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';
import { setEntryUrl } from '../../redux/actions/appActions';

/*
    Description: initializeStore middleware
    1) we create a Redux store for each request.
       and it's initialized with the reducers and the thunk middleware.
    2) If loadData exists in the the active route. We dispatch the fuction.
    3) The store and thunk promise are attached to the req app object to
       be accessed later on.
*/

function initializeStore(req, res, next) {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    const { loadData } = req.app.activeRoute || {};

    const promise = loadData
        ? loadData(store.dispatch, req.path)
        : Promise.resolve();

    store.dispatch(setEntryUrl(req.url));

    req.app = {
        store,
        promise,
    };

    next();
}

export default initializeStore;
