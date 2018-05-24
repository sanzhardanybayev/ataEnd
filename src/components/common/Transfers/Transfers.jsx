import React from 'react';

import styles from './style.scss';
import Transfer from '../Transfer/Transfer';


const Transfers = ({ data }) => {
    const transfers = data.map((transfer, index) => {
        const { title, description, price } = transfer;
        return (
            <Transfer
                index={index}
                title={title}
                text={description}
                price={price}
            />
        );
    });
    if (transfers.length < 1) {
        return null;
    }
    return (
        <div id="three" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Transfer].join(' ')} >
            <div className={styles.transfer1}>
                <h4> Трансфер </h4>
            </div>
            <div className={styles.Transfer2} >
                {
                    transfers
                }
            </div>
        </div>
    );
};

export default Transfers;

