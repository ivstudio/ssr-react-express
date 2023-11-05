import React from 'react';
import { useSelector } from 'react-redux';
import { fetchBlogPosts } from '@/redux/actions/blogActions';
import Card from '@/components/Card';
import useServerSideProps from '@/hooks/useServerSideProps';

const Blog = () => {
    const posts = useSelector(state => state.blog.posts);
    useServerSideProps(fetchBlogPosts());

    if (posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <section>
            {posts.map(post => (
                <Card key={post.id} data={post} />
            ))}
        </section>
    );
};

export const ssrBlog = {
    fetchBlogPosts: dispatch => dispatch(fetchBlogPosts()),
};

export default Blog;
