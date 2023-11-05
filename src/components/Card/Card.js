import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ data }) => {
    return (
        <article className={styles.container}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>

            <Link to={`/blog/${data.id}`}>Read more...</Link>
        </article>
    );
};

export default Card;
