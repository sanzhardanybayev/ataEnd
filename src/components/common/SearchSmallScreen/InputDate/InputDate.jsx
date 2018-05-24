import React from 'react';
import MaskedInput from 'react-maskedinput';
import moment from 'moment';
import styles from './style.scss';

export default class DateInput extends React.Component {
    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {
            card: '',
            expiry: '',
            ccv: ''
        }
    }
    _onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        let dateNow = moment().format('DD.MM.YYYY');
        console.log(dateNow)
        return(
            <div className={styles.date}>
                <MaskedInput mask="11.11.1111" name="expiry" placeholder={`${dateNow}`} onChange={this._onChange}/>
            </div>
        );
    }
}
