import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const useServerSideProps = dispatchAction => {
    const dispatch = useDispatch();
    const location = useLocation();
    const entryUrl = useSelector(state => state.app.entryUrl);
    const isPathEntryUrl = __isBrowser__ && location.pathname !== entryUrl;
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (dispatchAction && isPathEntryUrl && isInitialRender.current) {
            isInitialRender.current = false;
            dispatch(dispatchAction);
        }
    }, []);
};

export default useServerSideProps;
