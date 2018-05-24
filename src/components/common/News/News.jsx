import React from 'react';

import styles from './style.scss';


class News extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const image = require(`../../../../img/${this.props.image}`);

    return(
      <div className={styles.News}>
        <div className={styles.Image} style={{backgroundImage: `url(${image})`}}>

        </div>
        <div className={styles.Information}>
          <h5> {this.props.title} </h5>
          <p> {this.props.text} </p>
          <h6> {this.props.data} </h6>
        </div>


      </div>



    );
  }

}

export default News;

