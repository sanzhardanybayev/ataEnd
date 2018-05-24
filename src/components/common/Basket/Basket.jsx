import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import styles from './style.scss';
import Product from './Product/Product';
import ToursModal from '../Tours/ToursModal/ToursModal';


class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            active13: false,
            data: [],
            durationIndex: 0
        };
        // this.changeDuration = this.changeDuration.bind(this);
        this.modalSouvenir = this.modalSouvenir.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    closeModal() {
        this.setState({
            active13: false
        });
    }
    modalSouvenir() {
        this.setState({
            active13: true
        });
    }

    // changeDuration(value) {
    //     this.setState({
    //         durationIndex: value
    //     });
    // }


    render() {
        let
            product = [];

        console.warn('Here is tickers');
        product = this.props.tickets.map(ticket =>
            <Product
                type={ticket.props.type}
                price={ticket.props.price}
                content={ticket.props.content}
            />);
        console.log(product);
        return (
            <div className={styles.Basket}>
                <ToursModal
                    active13={this.state.active13}
                    click={this.closeModal}
                    product={this.props.product}
                    price= { _.sumBy(this.props.cart, 'price')}
                    image3="indo3.jpg"
                    itemId={this.props.itemId}
                />
               <div className={['container', styles.container].join(' ')}>
                    <div className={styles.allProducts}>
                        {
                            product
                        }
                    </div>
                   <div className={styles.basketInfo} >
                       <span className={styles.line}> </span>
                       <div className={styles.Left} >
                           <p> Билетов <span> { _.sumBy(this.props.cart, 'count')} </span> </p>
                       </div>
                       <div className={styles.Center} >
                           <img src={require('../../../../img/money-bag.svg')} alt="" />
                           <p> { _.sumBy(this.props.cart, 'price')} ₸ </p>
                       </div>
                       <div className={ styles.Right} >
                           <a onClick={this.modalSouvenir}> Купить </a>
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

export default connect(mapStateToProps)(Basket);
