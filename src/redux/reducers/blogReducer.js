import { BLOG } from '../actions/blogActions';

const initialState = {
    posts: [],
    postDetails: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BLOG.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            };
        case BLOG.FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                postDetails: action.payload,
            };
        default:
            return state;
    }
};
