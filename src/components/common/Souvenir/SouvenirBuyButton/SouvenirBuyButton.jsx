import React from 'react';
import styles from './style.scss';


class SouvenirBuyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <div onClick={this.props.click} className={styles.buy}>
                <a className={styles.a}> Купить </a>
            </div>

        );
    }
}

export default SouvenirBuyButton;

