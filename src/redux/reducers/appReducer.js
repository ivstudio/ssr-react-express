import { APP } from '../actions/appActions';

const initialState = {
    entryUrl: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APP.SET_ENTRY_URL:
            return {
                ...state,
                entryUrl: action.payload,
            };
        default:
            return state;
    }
};
