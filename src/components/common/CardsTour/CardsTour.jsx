import React from 'react';

import styles from './style.scss';
import CardsNumber from './CardsNumber/CardsNumber';


const CardsTour = ({ content, day }) => {
    const text = content.map((item) => {
        return (
            <CardsNumber text={item} />
        );
    });
    return (
        <div className={styles.Cards}>
            <div className="container">
                <div className={['row', styles.row].join(' ')}>
                    <h6> { day } <span> день </span> </h6>
                    {
                        text
                    }
                </div>
            </div>
        </div>
    );
};

export default CardsTour;
