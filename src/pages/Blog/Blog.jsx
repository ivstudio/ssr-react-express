import React from 'react';
import { useSelector } from 'react-redux';

import Card from '@/components/Card';
import Container from '@/components/Container';
import useServerSideProps from '@/hooks/useServerSideProps';
import { fetchBlogPosts } from '@/redux/actions/blogActions';

import styles from './Blog.module.scss';

function Blog() {
    const posts = useSelector(state => state.blog.posts);
    useServerSideProps(fetchBlogPosts());

    if (posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <Container className={styles['blog-container']}>
            {posts.map(post => (
                <Card key={post.id} data={post} />
            ))}
        </Container>
    );
}

export const ssrBlog = {
    fetchBlogPosts: dispatch => dispatch(fetchBlogPosts()),
};

export default Blog;
