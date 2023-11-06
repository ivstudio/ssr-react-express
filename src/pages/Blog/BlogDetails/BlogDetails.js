import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '@/components/Container';
import useServerSideProps from '@/hooks/useServerSideProps';
import { fetchBlogDetails } from '@/redux/actions/blogActions';

import styles from './Blog.module.scss';

const BlogDetails = () => {
    const { postId } = useParams();
    const post = useSelector(state => state.blog.postDetails);
    useServerSideProps(fetchBlogDetails(postId));

    if (!post.id) {
        return <p>No post found.</p>;
    }

    return (
        <Container className={styles['blog-details-container']}>
            <h1>{post.title}</h1>
            <h2>By user id:{post.userId}</h2>
            <h3>Post id:{post.id}</h3>
            <p>{post.body}</p>
        </Container>
    );
};

export const ssrBlogDetails = {
    fetchBlogDetails: (dispatch, params) => {
        return dispatch(fetchBlogDetails(params));
    },
};

export default BlogDetails;
