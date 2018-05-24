import React from 'react';

import styles from './style.scss';
import FirstText from '../../FirstPage/FirstText/FirstText';


class RoomAdvantage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return(
            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.ourText].join(' ')} >
                <div className={styles.text}>
                    <img src={require('../../../../img/icons/warning.svg')} alt=""/>
                    <p> Индивидуальное обслуживание в номере обеспечивается службой room-service, которая работает круглосуточно. </p>
                </div>
                <div className={['col-lg-12 col-md-12 col-sm-12 row', styles.allRooms].join(' ')} >
                    <div className={['col-lg-6 col-md-6 col-sm-12', styles.Left].join(' ')} >
                        <h6> Во всех номерах имеется</h6>
                        <FirstText name='двухспальная кровать'/>
                        <FirstText name='плазменный телевизор со спутниковым телевидением'/>
                        <FirstText name='телефон'/>
                        <FirstText name='мини-бар'/>
                        <FirstText name='система климат контроля'/>
                        <FirstText name='сейф'/>

                    </div>
                    <div className={['col-lg-6 col-md-6 col-sm-12 hidden-md-down', styles.Right].join(' ')} >
                        <h6> В стоимость проживания так же входят такие услуги, как: </h6>
                        <FirstText name='бильярд'/>
                        <FirstText name='кинозал'/>
                        <FirstText name='финская сауна'/>
                        <FirstText name='турецкий хамам'/>
                        <FirstText name='бассейн (закрытый открытый)'/>

                    </div>

                </div>
            </div>



        );
    }

}

export default RoomAdvantage;

