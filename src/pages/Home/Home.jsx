import React from 'react';
import { useSelector } from 'react-redux';

import Container from '@/components/Container';
import DataGrid from '@/components/DataGrid';
import useServerSideProps from '@/hooks/useServerSideProps';
import { fetchPhotos } from '@/redux/actions/homeActions';

function Home() {
    const photos = useSelector(state => state.home.photos);
    useServerSideProps(fetchPhotos());

    if (photos.length === 0) {
        return <p>No photos found.</p>;
    }

    return (
        <Container paper>
            <DataGrid data={photos} />
        </Container>
    );
}

export const ssrHome = {
    fetchPhotos: dispatch => dispatch(fetchPhotos()),
};

export default Home;
