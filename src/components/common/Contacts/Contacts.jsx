import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.css';
import swal from 'sweetalert';
import InputMask from 'react-input-mask';

import styles from './style.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    send(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const form = e.target;
        axios.post(`http://${window.host}/feedback`, formData)
            .then(res => {
                console.log(res.data);
                form.reset();
                swal("Ваша заявка отправлена!", "Скором времени с вами свяжутся!", "success");
            })
            .catch(err => console.log(err));
        
    }

    render(){
        return(
            <div>
                <Header background = {('1.jpg')} miniTitle='Контакты' title='Контакты' text='Мы та команда, которую вы искали. Мы работаем для вас.' />
                <div className={['container', styles.Contacts].join(' ')}>
                    <div className={['row', styles.row].join(' ')}>
                        <div className={['col-12 col-lg-12 col-xl-12 col-md-12 row', styles.Menu].join(' ')}>
                            <div className={['col-lg-6 col-xl-6 col-md-6 col-sm-12', styles.Left].join(' ')}>
                                <div className={styles.Top}>
                                    <h5> АДРЕС </h5>
                                    <p> <a href="https://www.google.kz/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%96%D0%B0%D0%BD%D0%B4%D0%BE%D1%81%D0%BE%D0%B2%D0%B0+22,+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+050057/@43.2337926,76.9045393,17z/data=!3m1!4b1!4m5!3m4!1s0x3883692f5f50b2b3:0x9347793f2bc837c6!8m2!3d43.2337926!4d76.906728?hl=ru">
                                            ТОО «Турагентсво Aray Travel Agency» 050016, Республика Казахстан, г. Алматы, ул. Жандосова, д.22
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.Center}>
                                    <h5> ТЕЛЕФОН </h5>
                                    <p> <a href="tel:+7 705 421 12 45 ">  +7 705 421 12 45 </a> </p>
                                    <p> <a href="tel:+7 +7 747 123 45 74 "> +7 747 123 45 74 </a> </p>
                                </div>
                                <div className={styles.Bottom}>
                                    <h5> E-MAIL </h5>
                                    <p><a href="mailto:info@araytravel.kz"> info@araytravel.kz </a> </p>
                                </div>
                            </div>
                            <div className={['col-lg-6 col-xl-6 col-md-6 col-sm-12', styles.Right].join(' ')}>
                                <h5> СВЯЖИТЕСЬ С НАМИ </h5>
                                <form onSubmit={this.send}>
                                    <div>
                                        <input name="name" placeholder='Имя*' type="text" required/>
                                        <InputMask {...this.props} name="phoneNumber" mask="+7 999 999 99 99" maskChar="" placeholder="Телефон" required />
                                    </div>
                                    <input name="email" placeholder='E-mail*' type="text" required/>
                                    <textarea name="text" placeholder='Текст сообщения' required></textarea>
                                    <button type="submit"> Отправить </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Contacts;
