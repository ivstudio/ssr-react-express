import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

function Card({ data: { id, title, body } }) {
    return (
        <Link to={`/blog/${id}`} title={title} className={styles['card-link']}>
            <h2 className={styles['card-title']}>{title}</h2>
            <p className={styles['card-description']}>{body}</p>
        </Link>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
};
export default Card;
