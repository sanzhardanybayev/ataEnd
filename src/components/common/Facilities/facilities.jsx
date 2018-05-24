import React from 'react';
import styles from './styles.scss';
import SelectContent from './selectContentFilter';

const Facilities = ({ type }) => {
    let content;
    switch (type) {
    case 'Туров':
        content = [
            <SelectContent type="summer" text="Лето" />,
            <SelectContent type="religion" text="Религия" />,
            <SelectContent type="tent" text="Поход" />,
            <SelectContent type="riffle" text="Охота" />,
            <SelectContent type="winter" text="Зима" />,
            <SelectContent type="food" text="Питание" />,
            <SelectContent type="discount" text="Скидка" />
        ];
        break;
    case 'Санаториев':
        content = [
            <SelectContent type="swimmingPool" text="Бассейн" />,
            <SelectContent type="wifi" text="Wi-Fi" />,
            <SelectContent type="spa" text="СПА" />,
            <SelectContent type="kids" text="Детский" />,
            <SelectContent type="transfer" text="Трансфер" />
        ];
        break;
    default:
        return null;
    }
    return (
        <div className={['container', styles.facilities].join(' ')}>
            <div className="row">
                <p className="col-12">По удобствам</p>
                {
                    content
                }
            </div>
        </div>
    );
};

export default Facilities;
