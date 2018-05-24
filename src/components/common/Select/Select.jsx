import React from 'react';
import styles from './style.scss';
import BuyButton from '../buyButton/buyButton';
import SouvenirBuyButton from '../Souvenir/SouvenirBuyButton/SouvenirBuyButton';
import SelectQuantity from '../SelectLearn/SelectQuantity';


class Select extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    const image = `http://${window.host}/images/souveniers/${this.props.image}`;

    return(
      <div className = {[styles.modalLearn, ((this.props.active1) ? styles.show2 : '')].join(' ')}>
        <div className={styles.blackFilter}></div>
        <div className={styles.Modal}>
          <span onClick={this.props.close} className={styles.Close}></span>
          <div className={styles.Left}>
            <div className={styles.backGround} style={{backgroundImage: `url(${image})`}}></div>
          </div>
          <div className={styles.Right}>

            <h3> {this.props.title} </h3>
            <p> ₸ <span> {parseFloat(this.props.price) * this.props.counter} </span> </p>
            <div className={styles.text}>
                <p className={styles.LearnText}> {this.props.description} </p>
            </div>
            {/*<SelectLearn amount1='1' amount2='2' amount3='3' amount4='4' amount5='5' text='штук' icons={require('../../../../img/mathematical-basic-signs-of-plus-and-minus-with-a-slash.png')} />*/}
              <div onClick={this.props.click} className={styles.buy}>
                  <a className={styles.a}> Купить </a>
              </div>
          </div>
        </div>
      </div>


    );
  }

}

export default Select;
