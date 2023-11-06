import { combineReducers } from 'redux';

import appReducer from './appReducer';
import blogReducer from './blogReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
    blog: blogReducer,
    app: appReducer,
    home: homeReducer,
});

export default rootReducer;
