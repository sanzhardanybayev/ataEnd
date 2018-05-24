import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { NavLink } from 'react-router-dom';
import styles from './styles.scss';
import First from "../FirstPage/FirstPage";
import Contacts from "../common/Contacts/Contacts";

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.change = this.change.bind(this);
    }
    change() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        return (
            <nav className={['container pt-4 d-none d-xl-block', styles.Navigation].join(' ')}>
                <div className={['row mb-3', styles.communications].join(' ')}>
                    <div className={'col-6'}>
                        <div className={'row align-items-end'}>
                            <div className={'col-4 px-0'}>
                                <a href="#" className={'col-3'}><img src={require(`../../../img/icons/Path 270.png`)} alt=""/></a>
                                <a href="#" className={'col-3'}><img src={require(`../../../img/icons/vk-social-network-logo.png`)} alt=""/></a>
                                <a href="#" className={'col-3'}><img src={require(`../../../img/icons/Path 433.png`)} alt=""/></a>
                                <a href="#" className={'col-3'}><img src={require(`../../../img/icons/youtube.png`)} alt=""/></a>
                            </div>
                            <div className={'col-6'}>
                                <p className={[styles.address, 'col-12 mb-0'].join(' ')}>
                                    <a href="https://www.google.kz/maps/place/%D0%A1%D0%B0%D1%80%D1%8B%D0%B0%D0%B3%D0%B0%D1%88%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD/@41.4238792,68.1827169,9z/data=!3m1!4b1!4m5!3m4!1s0x38ac231764984773:0xe186f649808727ca!8m2!3d41.6209523!4d68.7154975?hl=ru ">
                                        РК, ЮКО, Сарыагашский район
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <div className={'row align-items-end justify-content-end'}>
                            <div className={'col-5 row justify-content-end'}><a href='mailto:info@araytravel.kz' className={[styles.devLink, styles.maill].join(' ')}>info@araytravel.kz</a></div>
                            <div className={'col-5 row justify-content-end'}><a href='tel:+7 775 907 03 07' className={[styles.devLink, styles.call].join(' ')}>+7 775 907 03 07</a></div>
                        </div>
                    </div>
                </div>
                <span className={[styles.leftCetnerLine, 'd-none d-xl-block'].join(' ')}></span>
                <div className={[styles.logo, 'd-none d-xl-block'].join(' ')}>
                    <a href="/"> <img src={require('../../../img/icons/Group 576.png')} alt=""/> </a>
                </div>
                <span className={[styles.rightCetnerLine, 'd-none d-xl-block'].join(' ')}></span>
                <div className={['row pt-3', styles.NavLink].join(' ')}>
                    <div className={'col-6'}>
                        <div className={['col-10 row justify-content-between', styles.avia].join(' ')}>
                            <NavLink exact to="/" activeClassName={styles.active} className={[styles.linktoPage].join(' ')}>Главная</NavLink>
                            <NavLink
                                to="/tours"
                                activeClassName={styles.active}
                                className={[styles.linktoPage].join(' ')}
                            >
                                Туры
                            </NavLink>
                            <NavLink to="/sanatoriums" activeClassName={styles.active} className={[styles.linktoPage].join(' ')}>Санатории</NavLink>
                            <NavLink to="/souveniers" activeClassName={styles.active} className={[styles.linktoPage].join(' ')}>Сувениры</NavLink>
                        </div>
                    </div>
                    <div className={'col-5 offset-1'}>
                        <div className={['row justify-content-between', styles.avia].join(' ')}>
                            <NavLink to="/about" activeClassName={styles.active} className={[styles.linktoPage].join(' ')}>О Казахстане</NavLink>
                            <div className={styles.aviata}>
                                <a onClick={this.change} className={[styles.linktoPage].join(' ')}>Заказ билетов
                                    <span className={[styles.windows, ((this.state.active) ? styles.show1 : '')].join(' ')}>  </span></a>
                                <div onClick={this.change} className={[styles.windows, ((this.state.active) ? styles.show : '')].join(' ')}>
                                    <div>
                                        <a target="_blank" href="https://tickets.kz/avia/city/almaty"> Авиа Билеты </a>
                                        <a target="_blank" href="https://tickets.kz/gd"> ЖД Билеты </a>
                                    </div>
                                </div>
                            </div>
                            <NavLink to="/gallery" activeClassName={styles.active} className={[styles.linktoPage].join(' ')}>Галерея</NavLink>
                            <NavLink to="/contacts" activeClassName={styles.active} className={[styles.linktoPage].join(' ')}>Контакты</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
