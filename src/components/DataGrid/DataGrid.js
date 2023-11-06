import React from 'react';

import styles from './DataGrid.module.scss';

const DataGrid = ({ data }) => {
    return (
        <div className={styles['data-grid-container']}>
            <div className={styles['data-grid-header']}>
                <p className={styles['data-grid-label']}></p>
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
};

export default DataGrid;
