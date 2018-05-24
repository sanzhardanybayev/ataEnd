import React from 'react';
import styles from './styles.scss';

export default function Facts (props) {
    return(
        <div className={['row mb-5 col-12 col-md-6', styles.Fact].join(' ')}>
            {/*Число*/}
            <div className={'col-3 px-0 text-right'}>
                <h1>{props.number}</h1>
            </div>
            <div className={'col-9'}>
                <h6>{props.head}</h6>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
