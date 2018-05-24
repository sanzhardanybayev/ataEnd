import React from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import styles from './style.scss';
import PuyButton from '../../PuyButton/PuyButton';
import DatePick from '../../DayPicker/DatePick';


class ToursModal extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            age: 0,
            open: false
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
      handleOpen = () => {
        this.setState({ open: true });
      };





    send = () => {
        const data = {
            productId: this.props.itemId,
            room: this.props.room,
            peopleNumber: 2,
            booking: false,
            type: 'sanatoria',
            name: 'artur',
            phoneNumber: '+77473811111',
            email: 'artur@mail.ru',
            date: new Date(this.state.date)
        };
        console.log(data);
        axios.post(`http://${window.host}/requests`, data)
            .then(() => {
                alert('перевод на страницу оплаты');
            });
    }


    render(){
        const image3 = require(`../../../../../img/${this.props.image3}`);
        const { classes } = this.props;


        return(
            <div className = {[styles.modalWindow, ((this.props.active13) ? styles.show2 : '')].join(' ')}>
                <div onClick={this.props.close} className={styles.blackFilter}></div>
                <div className={styles.Modal}>
                    <div className={styles.modalImage} style={{backgroundImage: `url(${image3})`}}>
                        <div className={styles.filterImage}></div>
                        <img onClick={this.props.close} src={require('../../../../../img/icons/cancel-music.png')} alt=""/>
                        <h4> Санатория </h4>
                        <p> Ваши данные </p>

                    </div>
                    <div className={styles.Information}>
                        <div className={styles.Input}>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Где </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder={this.props.product} value={this.props.product} type="data"/>
                                    <img src={require('../../../../../img/icons/star.png')} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Когда </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <DatePick onDateChange={this.onDateChange}/>
                                    <img src={require('../../../../../img/icons/calendar.png')} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Номер </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input value={this.props.item} type="data"/>
                                    <img src={require('../../../../../img/icons/key.png')} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Выберите трансфер </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <div>
                                    <form autoComplete="off">
                                            <Select
                                                open={this.state.open}
                                                onClose={this.handleClose}
                                                onOpen={this.handleOpen}
                                                value={this.state.age}
                                                onChange={this.handleChange}
                                                className={styles.selects}
                                                inputProps={{
                                                name: 'age',
                                                id: 'controlled-open-select',
                                                }}
                                            >
                                                <MenuItem value="">
                                                <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                    </form>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Количество гостей </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input placeholder='2 Взрослых'  type="data"/>
                                    <img src={require('../../../../../img/icons/users.png')} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Имя </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input  placeholder=" Айдана Саматова " type="data"/>
                                    <img src={require('../../../../../img/icons/profile.png')} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> Телефон </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <InputMask {...this.props} mask="+7 999 999 99 99" maskChar="" placeholder="+7 777 777 77 77" />
                                    <img src={require('../../../../../img/icons/call-answer.png')} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ModalInput}>
                                <div className={styles.ModalInput1}>
                                    <p> E-mail </p>
                                </div>
                                <div className={styles.ModalInput2}>
                                    <input  placeholder=" г.Шымкент ул.Абая 44 " type="data"/>
                                    <img src={require('../../../../../img/icons/home.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Dollars}>
                            <img src={require('../../../../../img/money-bag.svg')} alt=""/>
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

export default ToursModal;
