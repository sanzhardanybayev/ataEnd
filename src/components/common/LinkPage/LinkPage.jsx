import React from 'react';
import { Link } from  'react-router-dom';
import styles from './style.scss';


class LinkPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div className={styles.Name1}>
                <Link to={this.props.link} className={styles.showMore}> {this.props.text} <img src={require('../../../../img/icons/arrow_grey_right.png')} /> </Link>
            </div>

        );
    }
}
export default LinkPage;
