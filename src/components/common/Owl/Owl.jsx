import React from 'react';
import styles from './style.scss';

class Owl extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const image = require(`../../../../img/${this.props.image}`);
    return(
          <div className={styles.one}>
            <div className={styles.two}>
              <div className={styles.three}>
                <div className={styles.four1} style={{backgroundImage: `url(${image})`}}>
                  <div className={styles.BlackFilter}></div>
                  <div className={styles.inner}>
                    <img src={this.props.icon} alt=""/>
                    <h4>{this.props.title}</h4>
                  </div>
                </div>
                <div className={styles.four2}>
                  <div className={styles.BlackFilter}></div>
                  <div className={styles.inner}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }

}

export default Owl;

