import React from 'react';

import classNames from 'classnames';

import styles from './Container.module.scss';

const Container = ({ children, className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;
