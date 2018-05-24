import React from 'react';
import FilterPanel from '../FilterPalen/FilterPanel';
import Facilities from '../Facilities/facilities';
import styles from './styles.scss';

const FilterContainer = (props) => {
    return (
        <div className={styles.Cont}>
            <FilterPanel type={props.type} min={1000} max={1000000} />
            <Facilities type={props.type} />
        </div>
    );
};

export default FilterContainer;
