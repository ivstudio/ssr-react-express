export const APP = {
    SET_ENTRY_URL: 'SET_ENTRY_URL',
};

export const setEntryUrl = url => ({
    type: APP.SET_ENTRY_URL,
    payload: url,
});
