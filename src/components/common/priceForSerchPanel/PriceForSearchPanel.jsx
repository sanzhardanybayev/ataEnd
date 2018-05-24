import React from 'react';
import styles from './style.scss';

export default class PriceForSearchPanel extends React.Component {
    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            card: '',
            expiry: '',
            ccv: ''
        }
    }
    componentWillMount(){
    }
    _onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <div className={styles.date}>
                <input value={this.props.price} placeholder="15000" type="number" min="0" maxlength="10" size="10"/>
            </div>
        );
    }
}
