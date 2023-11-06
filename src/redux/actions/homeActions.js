export const HOME = {
    FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
};

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPhotos = () => async dispatch => {
    try {
        const res = await fetch(`${apiUrl}/photos?_limit=100`);
        const photos = await res.json();
        dispatch({
            type: HOME.FETCH_PHOTOS_SUCCESS,
            payload: photos,
        });
    } catch (err) {
        console.error(err);
    }
};
