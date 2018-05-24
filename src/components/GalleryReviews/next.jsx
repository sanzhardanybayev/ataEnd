import React from 'react';
import styles from './next.scss';

export default function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block', color: '#000'}}
            onClick={onClick}
        ></div>
    );
}
