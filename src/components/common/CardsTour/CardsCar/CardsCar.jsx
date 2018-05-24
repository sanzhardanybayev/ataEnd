import React from 'react';

import styles from './style.scss';


class CardsCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render(){

        return(
            <div className={styles.Car}>
                <img src={this.props.car} alt=""/>
                <p> {this.props.text} </p>
            </div>


        );
    }

}

export default CardsCar;

