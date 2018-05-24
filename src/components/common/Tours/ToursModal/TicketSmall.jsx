import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './style.scss';
import { tourTicketIncrement, tourTicketDecrement } from '../../../../actions/cartActions';

class TicketSmall extends React.Component {
    constructor(props) {
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
    }



    plusOne(e) {
        this.props.tourTicketIncrement({
            type: this.props.type,
            price: this.props.initialPrice
        });

    }

     minusOne(e) {
        const counter = e.target.getAttribute('counter');
        console.log(counter);
        if (counter > 0) {
                this.props.tourTicketDecrement({
                    type:  this.props.type,
                    price: this.props.initialPrice
                });
        }

    }


    render() {
        const ticket = this.props.cart.find(ticket => ticket.type === this.props.type);


        return <div className={styles.ModalInput}>
            <div className={styles.ModalInput1}>
                <p> {ticket.type} билет </p>
            </div>
            <div className={styles.ModalInput2}>
                <input value={ticket.count} type="data"/>
                <img src={require('../../../../../img/icons/users.png')} alt=""/>
                <div className={styles.counter}>
                    <div className={styles.minus}>
                        <div counter={ticket.count} onClick={this.minusOne}/>
                        <img src={require('../../../../../img/remove.svg')} alt=""/>
                    </div>
                    {/*<p>  {ticket.count} </p>*/}
                    <div className={styles.plus}>
                        <div onClick={this.plusOne}/>
                        <img src={require('../../../../../img/add.svg')} alt=""/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        tourTicketIncrement,
        tourTicketDecrement
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(TicketSmall);
