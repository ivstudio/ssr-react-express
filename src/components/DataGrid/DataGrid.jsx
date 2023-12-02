import React from 'react';

import PropTypes from 'prop-types';

import styles from './DataGrid.module.scss';

function DataGrid({ data }) {
    return (
        <div className={styles['data-grid-container']}>
            <div className={styles['data-grid-header']}>
                <p className={styles['data-grid-label']} />
                <p className={styles['data-grid-label']}>Id</p>
                <p className={styles['data-grid-label']}>Title</p>
            </div>
            {data.map(item => (
                <li key={item.id} className={styles['data-grid-row']}>
                    <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className={styles['data-grid-row-image']}
                    />
                    <p className={styles['data-grid-row-id']}>{item.id}</p>
                    <p className={styles['data-grid-row-title']}>
                        {item.title}
                    </p>
                </li>
            ))}
        </div>
    );
}

DataGrid.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DataGrid;
