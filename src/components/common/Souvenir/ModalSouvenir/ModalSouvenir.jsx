import React from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios'; 
import styles from './style.scss';
import PuyButton from '../../PuyButton/PuyButton';



class ModalSouvenir extends React.Component {
    send = () => {
        const data = {
            productId: this.props.itemId,
            type: 'souveniers',
            name: 'artur',
            phoneNumber: '+77473811111',
            address: 'Сары-Арка 60'
        };
        console.log(data);
        axios.post(`http://${window.host}/requests`, data)
            .then(() => {
                alert('перевод на страницу оплаты');
            });
    }
    render() {
        const image3 = `http://${window.host}/images/souveniers/${this.props.image}`;

        return (
            <div className={[styles.modalWindow, ((this.props.active13) ? styles.show2 : '')].join(' ')}>
                <div className={styles.blackFilter} />
                <div className={styles.Modal}>
                    <div className={styles.modalImage} style={{ backgroundImage: `url(${image3})` }}>
                        <div className={styles.filterImage} />
                        <img onClick={this.props.click} src={require('../../../../../img/icons/cancel-music.png')} alt="" />
                        <h4> Сувениры </h4>
                        <p> Ваши данные </p>
                    </div>
                    <div className={styles.Information}>
                        <div className={styles.Input}>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Что </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder={this.props.product} value={this.props.product} type="data" />
                                    <img src={require('../../../../../img/icons/star.png')} alt="" />
                                </div>
                            </div>
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
                                    <InputMask {...this.props} mask="+7 999 999 99 99" maskChar="" placeholder="+7 777 777 77 77" />
                                    <img src={require('../../../../../img/icons/call-answer.png')} alt="" />
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Адрес доставки </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder=" г.Шымкент ул.Абая 44 " type="data" />
                                    <img src={require('../../../../../img/icons/home.png')} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className={styles.Dollars}>
                            <img src={require('../../../../../img/money-bag.svg')} alt="" />
                            <p> {this.props.price * this.props.counter} <span> ₸ </span> </p>
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

export default ModalSouvenir;
