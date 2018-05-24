import React from 'react';

import styles from './style.scss';


class PuyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {


        return(
           <div className={styles.download}>
               <a href=" "> Скачать чек </a>
               <img src={require('../../../../img/icons/download.png')} alt=""/>
           </div>


        );
    }

}

export default PuyButton;

