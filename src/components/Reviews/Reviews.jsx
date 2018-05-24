import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './styles.scss';


class Reviews extends React.Component {
    render() {
        const url = `http://${window.host}/images/Main%20Page/${this.props.img}`;
        return (
            <div className={[styles.Reviews, 'col-6 mb-4'].join(' ')}>
                <div className={styles.Avatar} style={{ backgroundImage: `url(${url}) ` }} ></div>

                <h2 className={styles.name}>{this.props.name}</h2>
                <p>{this.props.text}</p>
                <p className={styles.date}>{this.props.date}</p>
            </div>
        );
    }
}

export default Reviews;
