import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import styles from './style.scss';
import NavMenuSmallScreen from '../NavMenuSmallScreen/NavMenuSmallScreen';
import styleMenu from '../NavMenuSmallScreen/style.scss';


export default class NavigationSmallScreen extends React.Component{
    constructor(props){
        super(props);
        this.seenMenu = true;
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(){
       let menu =  document.getElementsByClassName(styleMenu.cont)[0];
       menu.classList.toggle(styleMenu.show);
    }
    render(){
        return(
            <nav className={['container-fluid pt-4 pr-4 d-block d-xl-none', styles.SmallNav].join(' ')}>
                <NavMenuSmallScreen click={this.showMenu} show={this.seenMenu}/>
                <div className={'row justify-content-around'}>
                    <div className={['col-2 col-sm-2 col-md-1', styles.samllScreenButton].join(' ')}>
                        <button onClick={this.showMenu} className={styles.burger}>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                        </button>
                    </div>
                    <div className={'col-10 row justify-content-end align-items-center'}>
                        <h2>ARAY TRAVEL AGENCY</h2>
                        <div className={[styles.logo].join(' ')}>
                            <a href="/"> <img src={require('../../../../img/icons/Group 576.png')} alt=""/> </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
