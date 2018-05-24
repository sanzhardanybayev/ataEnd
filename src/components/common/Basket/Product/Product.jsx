import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tourTicketIncrement, tourTicketDecrement } from '../../../../actions/cartActions';
import styles from './style.scss';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0

        };
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);

    }
    plusOne() {

        this.setState((prevState) => {
            const priceIncremented = prevState.counter + 1;
            this.props.tourTicketIncrement({ type: this.props.type, price: this.props.price  });

            return {
                counter: priceIncremented
            };

        });
    }
    minusOne(e) {
        if(e.target.getAttribute('counter') > 0){
            this.setState((prevState) => {
                const priceDecremented = prevState.counter - 1;
                this.props.tourTicketDecrement({ type: this.props.type, price: this.props.price  });

                return {
                    counter: priceDecremented
                };

            });
        }

    }


    render() {
        const ticket = this.props.cart.find(ticket => ticket.type === this.props.type);

        return (
            <div className={styles.basketInfo} >
                <div className={styles.Left} >
                    <p> {this.props.type} </p>
                    <p> {this.props.content} </p>

                </div>
                <div className={styles.Center} >
                    <p> { ticket.price } ₸ </p>

                </div>
                <div className={ styles.Right} >
                    <div className={styles.counter}>
                        <div className={styles.minus}>
                            <div counter={ticket.count} onClick={this.minusOne} ></div>
                            <img  src={require('../../../../../img/remove.svg')} alt=""/>
                        </div>
                        <p>{ ticket.count } </p>
                        <div className={styles.plus}>
                            <div onClick={this.plusOne} ></div>
                            <img  src={require('../../../../../img/add.svg')} alt=""/>

                        </div>
                    </div>
                </div>
            </div>


        );
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

export default connect(mapStateToProps, matchDispatchToProps)(Product);
