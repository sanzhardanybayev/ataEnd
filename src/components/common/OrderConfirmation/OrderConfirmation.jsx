import React from 'react';

import styles from './style.scss';
import DownLoadButton from '../../common/downloadButton/DownloadButton';


class OrderConfirmation extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

    }


    render() {


        return(
            <div className={['container', styles.Order].join(' ')}>
                <div className={['row', styles.row].join(' ')}>
                    <h5> Номер заказа № {this.props.orderNumber} </h5>
                    <div className={['col-12 col-lg-12 col-xl-12 col-md-12 row', styles.Menu].join(' ')}>
                        <div className={['col-lg-6 col-xl-6 col-md-6 col-sm-12', styles.Left].join(' ')}>
                            <div className={styles.Left1}>
                                <p> Информация о заказе была выслана на почту <span>{this.props.email}</span> </p>
                            </div>
                            <div className={styles.center}>
                                <p> Имя </p>
                                <span> {this.props.name} </span>
                            </div>
                            <div className={styles.center}>
                                <p> Место </p>
                                <span> {this.props.roomHotel} </span>
                            </div>
                            <div className={styles.center}>
                                <p> Дата </p>
                                <span> {this.props.data} </span>
                            </div>
                            <div className={styles.center}>
                                <p> Номер </p>
                                <span> {this.props.roomLux} </span>
                            </div>
                            <div className={styles.center}>
                                <p> Количетсво людей </p>
                                <span> {this.props.people} </span>
                            </div>
                            <div className={styles.center}>
                                <p> Телефон </p>
                                <span> {this.props.mobile} </span>
                            </div>
                            <div className={styles.center}>
                                <p> E-mail </p>
                                <span> {this.props.email} </span>
                            </div>
                            <div className={styles.center}>
                                <p> Оплачено </p>
                                <span> {this.props.paid} тг </span>
                            </div>
                            <DownLoadButton />

                        </div>
                        <div className={['col-lg-6 col-xl-6 col-md-6 col-sm-12', styles.Right].join(' ')}>
                            <div className={styles.Modal}>
                                <h6> Благодарим вас, за то что, пользуетесь нашей услугой </h6>
                                <p> Есть вопросы, позвоните по горячему телефону Мы всегда рады ответить на ваши вопросы </p>
                                <div className={styles.mobile}>
                                    <div className={styles.number}>
                                        <img src={require('../../../../img/icons/call-answer.png')} alt=""/>
                                        <p> +7 705 421 12 45 </p>
                                    </div>
                                    <div className={styles.number}>
                                        <img src={require('../../../../img/icons/call-answer.png')} alt=""/>
                                        <p> +7 705 421 12 45 </p>
                                    </div>

                                </div>
                                <h6> До скорой встречи. </h6>

                            </div>

                        </div>

                    </div>

                </div>
            </div>



        );
    }

}

export default OrderConfirmation;

