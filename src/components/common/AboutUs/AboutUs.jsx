import React from 'react';

import styles from './style.scss';


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {


        return(
            <div id="About" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.About].join(' ')} >
                <div  className={styles.aboutH4}>
                    <h4> О нас </h4>
                </div>
                <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.aboutUs].join(' ')} >
                    {this.props.text}

                </div>
            </div>




        );
    }

}

export default AboutUs;

