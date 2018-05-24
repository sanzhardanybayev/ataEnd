import React from 'react';
import styles from './style.scss';


class RoomText extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {


        return (
            <div className={styles.title}>
                <p> {this.props.name} </p>
            </div>


        );
    }

}

export default RoomText;

