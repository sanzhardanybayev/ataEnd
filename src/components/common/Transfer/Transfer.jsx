import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/transferActions';

import styles from './style.scss';


class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Выбрать',
            color: false
        };
        this.increaseScore = this.increaseScore.bind(this);

    }
    

    increaseScore () {
            this.setState({
                city : 'Выбрано'
            });
            this.setState({
                color: !this.state.color
            });
        }
    // text = (e) => {
    //     var city = e.target;
    //     if(city.innerHTML == "Выбрано"){
    //         city.innerHTML = "Выбрать";
    //     }
    //     else{
    //         city.innerHTML = "Выбрано"
    //     }

    // }

    chooseTransfer = () => {
        this.props.changeTransfer(this.props.index);
        this.increaseScore();
    }

    render() {
        return(
            <div className={styles.Transfer}>
                <div className={styles.Transfer1}>
                    <h3> {this.props.title} </h3>
                    <p> {this.props.text} </p>
                    <div className={styles.Money}>
                        <img src={require('../../../../img/money-bag.svg')} alt=""/>
                        <p> {this.props.price} <span> ₸ </span> </p>
                    </div>
                    <div className={styles.butt}>
                        <button  onClick={this.chooseTransfer} className={[styles.modalWindow, ((this.state.color) ? styles.show2 : '')].join(' ')} > {this.state.city} </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = ({ selectedTransfer }) => {
    return { selectedTransfer };
};

export default connect(mapState, actions)(Transfer);

