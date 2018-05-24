import React from 'react';

import styles from './styles.scss';
import VolumeSlider from '../RengesPrice/RengesPrice';
import Rating from '../Rating/Rating';

const FilterPanel = ({ min, max, type }) => {
    return (
        <div className={['container', styles.filter].join(' ')}>
            <div className={['row'].join(' ')}>
                <h3 className="col-12">Фильтр</h3>
                <span />
                <p className="col-12">Цена</p>
                <div className={['col-6', styles.minAndMAx].join(' ')}>
                    <p>{ min }₸</p>
                </div>
                <div className={['col-6', styles.minAndMAx, styles.min].join(' ')}>
                    <p>{ max }₸</p>
                </div>
                <div className="col-12">
                    <VolumeSlider min={min} max={max} />
                </div>
                <span />
                <Rating type={type} />
                <span />
            </div>
        </div>
    );
};

export default FilterPanel;
