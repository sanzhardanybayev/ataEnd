import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import styles from './style.scss';

export default class NavMenuSmallScreen extends React.Component{

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


    render(){
        return(
            <div className={[styles.cont].join(' ')}>
                <div className={'container-fluid pt-4 pl-4'}>
                    <div className={['row', styles.SmallNav].join(' ')}>
                        <div className={'row col-12 justify-content-around'}>
                            <div className={['col-2 col-sm-2 col-md-1', styles.buttonSmallScreen].join(' ')}>
                                <button onClick={this.props.click} className={styles.close}>
                                    <img src={require(`../../../../img/icons/Group 1428.svg`)} alt=""/>
                                    <div className={styles.vial}></div>
                                </button>
                            </div>
                            <div className={['col-10 row justify-content-end align-items-center', styles.smallScreenLogo].join(' ')}>
                                <h2>ARAY TRAVEL AGENCY</h2>
                                <div className={[styles.logo].join(' ')}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={['container pt-4 pl-4', styles.linkList].join(' ')}>
                    <div className={'row'}>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} exact to="/">Главная</NavLink></div>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} to="/tours">Туры</NavLink></div>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} to="/sanatoriums">Санатории</NavLink></div>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} to="/souveniers">Сувениры</NavLink></div>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} to="/about">О Казахстане</NavLink></div>
                        <div onClick={this.change} className={['col-12 mb-3', styles.box, ((this.state.active) ? styles.show1 : '')].join(' ')}>
                            <NavLink activeClassName={styles.active} className={styles.linkToPage} to="#">Заказ Билетов</NavLink>
                            <div  className={[styles.order, ((this.state.active) ? styles.show2 : '')].join(' ')}>

                                <a href="" > <p> Авиа Билеты </p> </a>
                                <a href="" > <p> ЖД Билеты </p> </a>
                            </div>
                        </div>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} to="/gallery">Галерея</NavLink></div>
                        <div className={['col-12 mb-3', styles.box].join(' ')}><NavLink activeClassName={styles.active} className={styles.linkToPage} to="/contacts">Контакты</NavLink></div>
                        <div className={['col-12 row mt-4', styles.socialLink].join(' ')}>
                            <a href="" className={'col-3'}></a>
                            <a href="" className={'col-3'}></a>
                            <a href="" className={'col-3'}></a>
                            <a href="" className={'col-3'}></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
