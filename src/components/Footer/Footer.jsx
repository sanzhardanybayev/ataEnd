import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './styles.scss'

export default class Footer extends  React.Component {
    render() {
        return(
            <footer className={['container-fluid', styles.footer].join(' ')}>
                <div className={['row', styles.rowPadding].join(' ')}>
                    <div className={['row col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-0 offset-sm-0 offset-md-0 offset-lg-1 offset-xl-1', styles.cotact].join(' ')}>
                        <div className={'col-12 col-sm-12 col-md-7 col-lg-12 col-xl-12 offset-0 offset-sm-0 offset-md-4 offset-lg-0 offset-xl-0'}>
                            <p>
                                <a href="https://www.google.kz/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%96%D0%B0%D0%BD%D0%B4%D0%BE%D1%81%D0%BE%D0%B2%D0%B0+22,+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+050057/@43.2337926,76.9045393,17z/data=!3m1!4b1!4m5!3m4!1s0x3883692f5f50b2b3:0x9347793f2bc837c6!8m2!3d43.2337926!4d76.906728?hl=ru ">
                                    050016, Республика Казахстан, г. <br/>
                                    Алматы, ул. Жандосова, д.22
                                </a>
                            </p>

                            <p className={styles.call}> <a href="tel:+7 775 907 03 07"> +7 775 907 03 07  </a></p>

                            <p className={styles.mail}><a href=" mailto:info@araytravel.kz"> info@araytravel.kz </a></p>
                        </div>
                    </div>

                    <div className={'row col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'}>
                        <div className={['col-12 col-sm-12 col-md-5 col-lg-7 col-xl-7 offset-0 offset-sm-0 offset-md-4 offset-lg-0 offset-xl-0', styles.info1].join(' ')}>
                            <h5>Разделы</h5>
                            <div>
                                <a href="/tours">Туры</a>
                                <a href="/sanatoriums">Санатории</a>
                                <a href="/souveniers">Сувениры</a>
                            </div>
                            <div>
                                <a href="/about">О Казахстане</a>
                                <a href="/gallery">Галерея</a>
                                <a href="/contacts">Контакты</a>
                            </div>
                        </div>
                        <div className={['col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-0 offset-sm-0 offset-md-4 offset-lg-0 offset-xl-0', styles.payment].join(' ')}>
                            <h5>Оплачивайте с</h5>
                            <img src={require('../../images/masterCard.png')} alt=""/>
                            <img src={require('../../images/visa.png')} alt=""/>
                            <img src={require('../../images/yandex.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
