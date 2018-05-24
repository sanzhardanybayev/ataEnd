import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './styles.scss';
import Navigation from '../Navigation/Navigation';
import NavigationSmallScreen from '../common/NavigationSmallSreen/NavigationSmallScreen';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.Header} style={{backgroundImage: `url(${require(`../../../img/${this.props.background}`)}) `}}>
                <span className={styles.Filter}></span>
                <Navigation path={this.props.path} />
                <NavigationSmallScreen />
                <div className={['container', styles.way].join(' ')}>
                    <a href="/" >Главная</a>
                    <span className={styles.arrow}></span>
                    <a href="/#aboutQazaqstan" > {this.props.miniTitle}</a>
                </div>
                <div className={['container', styles.textHeader].join(' ')}>
                    <h1 className={styles.About}>{this.props.title}</h1>
                    <p className={styles.Text}>{this.props.text}</p>
                </div>
            </div>
        );
    }
}
