import React from 'react';

import styles from './style.scss';
import FirstText from '../../FirstPage/FirstText/FirstText';


class Medicina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {


        return(
            <div id="two" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.ourText].join(' ')} >
                <div className={styles.text}>
                    <h4 > Медицинские услуги </h4>
                </div>
                <div className={['col-lg-12 col-md-12 col-sm-12 row', styles.allRooms].join(' ')} >
                    <div className={['col-lg-6 col-md-6 col-sm-12 ', styles.Left].join(' ')} >
                        <FirstText name='Консультации терапевта, гастроэнтеролога кардиолога, уролога, акушера-гинеколога.'/>
                        <FirstText name='Минеральные ванные джакузи'/>
                        <FirstText name='Минеральные души всех видов'/>
                        <FirstText name='Слепое зондирование (тюбаж) , промывания желадука , дуодальное '/>
                        <FirstText name='Зондирование'/>

                    </div>
                    <div className={['col-lg-6 col-md-6 col-sm-12 ', styles.Right].join(' ')} >
                        <FirstText name='Физиолечение: лазеротерапия, магнитотерапия , суставная фототерапия, биоптрон, электротерапия, ультразвуковая терапия'/>
                        <FirstText name='оксигена терапия, ЭКГ,СМТ, дарсонваль'/>
                        <FirstText name='ОАК, ОАМ'/>
                        <FirstText name='Лечебние микролизы'/>
                        <FirstText name='Парафино - озокеритовое лечение.'/>

                    </div>

                </div>
            </div>



        );
    }

}

export default Medicina;

