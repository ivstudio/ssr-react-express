import { HOME } from '../actions/homeActions';

const initialState = {
    photos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HOME.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
            };
        default:
            return state;
    }
};
