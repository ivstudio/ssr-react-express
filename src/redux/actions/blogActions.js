export const BLOG = {
    FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
    FETCH_DETAILS_SUCCESS: 'FETCH_DETAILS_SUCCESS',
};

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchBlogPosts = () => async dispatch => {
    try {
        const res = await fetch(`${apiUrl}/posts`);
        const posts = await res.json();
        dispatch({
            type: BLOG.FETCH_POSTS_SUCCESS,
            payload: posts,
        });
    } catch (err) {
        console.error(err);
    }
};

export const fetchBlogDetails = path => async dispatch => {
    try {
        const postId = path.split('/').pop();
        const res = await fetch(`${apiUrl}/posts/${postId}`);
        const post = await res.json();

        dispatch({
            type: BLOG.FETCH_DETAILS_SUCCESS,
            payload: post,
        });
        return post;
    } catch (err) {
        console.error(err);
    }
};
