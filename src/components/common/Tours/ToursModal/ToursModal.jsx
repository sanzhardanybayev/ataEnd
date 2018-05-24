import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './style.scss';
import PuyButton from '../../PuyButton/PuyButton';
import DatePick from '../../DayPicker/DatePick';
import TicketSmall from './TicketSmall';

import { tourTicketIncrement, tourTicketDecrement } from '../../../../actions/cartActions';

class ToursModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: undefined
        };
    }
    onDateChange = (date) => {
        this.setState({ date });
    }
    send = () => {
        const tickets = this.props.cart.map((ticket, index) => {
            return {
                [ticket.type]: ticket.count
            };
        });
        const data = {
            productId: this.props.itemId,
            booking: false,
            type: 'tours',
            name: 'artur',
            phoneNumber: '+77473811111',
            email: 'artur@mail.ru',
            tickets,
            date: new Date(this.state.date)
        };
        console.log(data);
        axios.post(`http://${window.host}/requests`, data)
            .then(() => {
                alert('перевод на страницу оплаты');
            });
    }
    render() {

        const image3 = require(`../../../../../img/${this.props.image3}`);

        return (
            <div className={[styles.modalWindow, ((this.props.active13) ? styles.show2 : '')].join(' ')}>
                <div className={styles.blackFilter} />
                <div className={styles.Modal}>
                    <div className={styles.modalImage} style={{ backgroundImage: `url(${image3})` }}>
                        <div className={styles.filterImage} />
                        <img onClick={this.props.click} src={require('../../../../../img/icons/cancel-music.png')} alt="" />
                        <h4> Туры </h4>
                        <p> Ваши данные </p>
                    </div>
                    <div className={styles.Information}>
                        <div className={styles.Input}>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Куда </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder={this.props.product} value={this.props.product} type="data" />
                                    <img src={require('../../../../../img/icons/star.png')} alt="" />
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Когда </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <DatePick onDateChange={this.onDateChange} />
                                    <img src={require('../../../../../img/icons/calendar.png')} alt="" />
                                </div>
                            </div>

                            {
                                this.props.cart.map((ticket) => {
                                    return <TicketSmall initialPrice={ticket.initialPrice} type={ticket.type} />
                                })

                            }


                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Имя </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder=" Айдана Саматова " type="data" />
                                    <img src={require('../../../../../img/icons/profile.png')} alt="" />
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Телефон </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder=" +7 705 485 12 45 " type="data" />
                                    <img src={require('../../../../../img/icons/call-answer.png')} alt="" />
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> E-mail </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder=" г.Шымкент ул.Абая 44 " type="data" />
                                    <img src={require('../../../../../img/icons/home.png')} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className={styles.Dollars}>
                            <img src={require('../../../../../img/money-bag.svg')} alt="" />
                            <p> {this.props.price} <span> ₸ </span> </p>
                        </div>
                        <div className={styles.Buy}>
                            <PuyButton onClickHandle={this.send} />
                        </div>

                    </div>

                </div>

            </div>


        );
    }

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        tourTicketIncrement,
        tourTicketDecrement
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ToursModal);
