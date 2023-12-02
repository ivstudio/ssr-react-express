import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

function Card({ data }) {
    return (
        <Link
            to={`/blog/${data.id}`}
            title={data.title}
            className={styles['card-link']}
        >
            <h2 className={styles['card-title']}>{data.title}</h2>
            <p className={styles['card-description']}>{data.body}</p>
        </Link>
    );
}

export default Card;
