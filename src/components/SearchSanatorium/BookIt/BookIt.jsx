import React from 'react';
import swal from 'sweetalert'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import styles from './style.scss';
import PuyButton from '../../common/PuyButton/PuyButton';
import DatePiCK from '../../common/DayPicker/DatePick';
import InputMask from 'react-input-mask';
import axios from 'axios'


class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: undefined
        };
    }

    onDateChange = (date) => {
        this.setState({ date });
    }

    send = () => {
        const { type, cart } = this.props;
        let data = {
            productId: this.props.itemId,
            booking: false,
            type,
            name: 'artur',
            phoneNumber: '+77473811111',
            email: 'ygl8@storiqax.top',
            date: new Date(this.state.date)
        };

        axios.post(`http://${window.host}/requests`, data).then(() => {
          swal("Отлично", "Ваша заявка отправлена", "success");
        })


    }

    render() {
        if(!this.props.data){
            return <div />
        }
        return (
            <div className={styles.bookIt}>
                <div className={styles.imageFilter}>
                    <div className={styles.image} style={{backgroundImage: `url(${require(`../../../../img/${this.props.background}`)}) `}}>
                        <h4> {this.props.text} </h4>
                        <p> Ваши данные </p>
                        <img onClick={this.props.click} className={styles.close} src={require('../../../../img/icons/cancel-music.png')} alt=""/>
                    </div>
                    <div className={styles.filter}>
                    </div>
                </div>
                <div className={styles.content}>
                    <form action="">
                        <div className={styles.ModalInput}>
                            <div className={styles.ModalInput1}>
                                <p> Где </p>
                            </div>
                            <div className={styles.ModalInput2}>
                                <input placeholder={this.props.product} value={this.props.data.name} type="data"/>
                                <img src={require('../../../../img/icons/star.png')} alt=""/>
                            </div>
                        </div>
                        <div className={styles.ModalInput}>
                            <div className={styles.ModalInput1}>
                                <p> Когда </p>
                            </div>
                            <div className={styles.ModalInput2}>
                                <DatePiCK onDateChange={this.onDateChange} />
                                <img src={require('../../../../img/icons/calendar.png')} alt=""/>
                            </div>
                        </div>
                        <div className={styles.ModalInput}>
                            <div className={styles.ModalInput1}>
                                <p> Количество гостей </p>
                            </div>
                            <div className={styles.ModalInput2}>
                                <input value={this.props.quantityPerson } placeholder='2 Взрослых' type="data"/>
                                <img src={require('../../../../img/icons/users.png')} alt=""/>
                            </div>
                        </div>
                        <div className={styles.ModalInput}>
                            <div className={styles.ModalInput1}>
                                <p> Имя </p>
                            </div>
                            <div className={styles.ModalInput2}>
                                <input placeholder=" Айдана Саматова " type="data"/>
                                <img src={require('../../../../img/icons/profile.png')} alt=""/>
                            </div>
                        </div>
                        <div className={styles.ModalInput}>
                            <div className={styles.ModalInput1}>
                                <p> Телефон </p>
                            </div>
                            <div className={styles.ModalInput2}>
                                <InputMask {...this.props} mask="+7 999 999 99 99" maskChar="" placeholder="+7 777 777 77 77" />
                                <img src={require('../../../../img/icons/call-answer.png')} alt=""/>
                            </div>
                        </div>
                        <div className={styles.ModalInput}>
                            <div className={styles.ModalInput1}>
                                <p> E-mail </p>
                            </div>
                            <div className={styles.ModalInput2}>
                                <input placeholder="a123@mail.ru" type="data"/>
                                <img src={require('../../../../img/icons/home.png')} alt=""/>
                            </div>
                        </div>
                    </form>
                    <div className={styles.Dollars}>
                        <img src={require('../../../../img/money-bag.svg')} alt=""/>
                        <p> {this.props.data.minPrice * this.props.quantityPerson } <span> ₸ </span> </p>
                    </div>
                    <div className={styles.Buy}>
                        <PuyButton onClickHandle = {this.send} />
                    </div>


                </div>

            </div>


        );
    }

}

export default Rooms;

