import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './style.scss';


class Comments extends React.Component {
    render() {
        const url = `http://${window.host}/images/Main%20Page/${this.props.img}`;
        console.log(url)
        return (
            <div className={styles.dopContent}>
                <div className={styles.content}>
                    <div className={styles.Images}>
                        <div className={styles.backgroundImages} style={{ backgroundImage: `url(${url}) ` }} >

                        </div>
                        <h3> {this.props.name} </h3>

                    </div>
                    <div className={styles.text}>
                        <p> {this.props.text} </p>

                    </div>
                    <div className={styles.dates}>
                        <p>  {this.props.date} </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;
