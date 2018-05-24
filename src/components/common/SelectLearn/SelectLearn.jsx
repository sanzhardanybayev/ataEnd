import React, { Component } from 'react';
import styles from './style.scss';


class SelectLearn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        let choices = [];
        choices = this.props.choices.map((i) => {
            return (
                <li price={i.price} onClick={this.props.ChekCity} cityText={i.name}>
                    <a
                        price={i.price}
                        className={styles.chek}
                        cityText={i.name}
                    >
                        {i.name}
                    </a>
                </li>
            );
        });
        return (
            <div className={styles.Day}>
                <img onClick={this.props.change} src={this.props.icons} />
                <form className={styles.forms} action="">
                    <p
                        className={styles.inputCity}
                        onClick={this.props.change}
                    >
                        {this.props.city}
                    </p>
                    <span onClick={this.props.change} type="text" className={styles.arrowInput} />
                </form>
                <div className={[styles.Fall, ((this.props.active1) ? styles.show1 : '')].join(' ')}>
                    <ul className={[styles.Fall123, ((this.props.active1) ? styles.show2 : '')].join(' ')}>
                        {
                            choices
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SelectLearn;

