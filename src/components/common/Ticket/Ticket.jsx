import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './style.scss';
import ModuleButton from '../../ModuleBatton/ModuleButton';
import { tourTicketDecrement, tourTicketIncrement } from '../../../actions/cartActions';


class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            active: false
        };
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.change = this.change.bind(this);
    }
    change() {
        this.setState({
            active: true
        });
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

        return(
            <div id='one' className={['px-5 py-4', styles.Ticket].join(' ')}>
                <div className={'row'}>
                    <div className={'col-12 px-0'}>
                        <h6>{this.props.type}</h6>
                        <p>{this.props.content}</p>
                    </div>
                    <div className={'col-12 px-0 my-3'}>
                        <img src={require(`../../../../img/money-bag.png`)} alt=""/>
                        <h4>{ ticket.price } ₸</h4>
                    </div>
                    <div className={['col-12 px-0 my-3', styles.container].join(' ')}>
                        <div className={styles.counter}>
                            <div counter={ticket.count} onClick={this.minusOne} className={styles.minus}>
                                <img src={require('../../../../img/remove.svg')} alt=""/>
                            </div>
                            <p><span>{ ticket.count } </span> билет </p>
                            <div onClick={this.plusOne} className={styles.plus}>
                                <img src={require('../../../../img/add.svg')} alt=""/>

                            </div>
                        </div>
                        <ModuleButton click={this.change} active={this.state.active} text='Выбрать'/>
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
        tourTicketDecrement,
        tourTicketIncrement
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Ticket);
