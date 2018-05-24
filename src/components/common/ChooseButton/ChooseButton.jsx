import React from 'react';
import styles from './style.scss';


class ChooseButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

    }





    render(){


        return(
            <a className={styles.Choose} onClick={this.props.click} > Выбрать </a>
        );
    }

}

export default ChooseButton;

