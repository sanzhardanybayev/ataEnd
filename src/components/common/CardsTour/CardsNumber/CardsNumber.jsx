import React from 'react';

import styles from './style.scss';


class CardsNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {


        return(
           <div className={styles.text}>
               <p> {this.props.text} </p>
           </div>


        );
    }

}

export default CardsNumber;

