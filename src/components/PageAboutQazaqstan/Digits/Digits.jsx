import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './style.scss';


export default function Digits (props) {
    return(
        <div className={'col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-5 px-2'}>
            <div className={styles.digits}>
                <img src={require(`../../../../img/${props.img}`)} alt=""/>
                <h1 className={'col-12 mb-5'}>
                    {props.number}
                </h1>
                <p className={'col-12'}>{props.text}</p>
            </div>
        </div>
    );
}
