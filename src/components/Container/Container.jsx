import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

function Container({ children, paper = false, className }) {
    if (paper) {
        return (
            <div className={classNames(styles['paper-container'], className)}>
                <div className={styles.paper}>{children}</div>
            </div>
        );
    }
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    paper: PropTypes.bool,
    className: PropTypes.string,
};

export default Container;
