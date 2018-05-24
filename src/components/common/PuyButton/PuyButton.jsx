import React from 'react';
import styles from './style.scss';


class PuyButton extends React.Component{
  render(){


    return(
      <a className={styles.PuyButton} onClick={this.props.onClickHandle} > Оплатить </a>
    );
  }

}

export default PuyButton;

