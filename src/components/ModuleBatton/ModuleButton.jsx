import React from 'react';
import styles from './styles.scss';

export default function ModuleButton (props) {
    return(
        <div className={styles.buttons}>
            <button more="true" onClick={props.click} className={['col-12', styles.Butt, ((props.active) ? styles.hide : '')].join(' ')}>{props.text}</button>
        </div>
    );
}
