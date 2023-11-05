import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import AppReducer from './appReducer';

const rootReducer = combineReducers({
    blog: blogReducer,
    app: AppReducer,
});

export default rootReducer;
