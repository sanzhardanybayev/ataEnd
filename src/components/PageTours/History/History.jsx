import React from 'react';


import styles from './style.scss';

const History = ({ title, text }) => {
    return (
        <div className={styles.HistoryText}>
            <h6> {title} </h6>
            <p> {text} </p>
        </div>
    );
};

export default History;
