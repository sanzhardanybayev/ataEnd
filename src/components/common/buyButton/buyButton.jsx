import React from 'react';
import styles from './style.scss';

const buyButton = ({ url }) => {
    return (
        <div className={styles.buy}>
            <a className={styles.a} href={url} > Купить </a>
        </div>
    );
};

export default buyButton;

