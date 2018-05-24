import React from 'react';

import styles from './style.scss';
import Stars from '../Stars/Stars';
import Select from '../Select/Select';
import BuyButton from '../buyButton/buyButton';
import ModalSouvenir from './ModalSouvenir/ModalSouvenir';
import SelectQuantity from '../SelectLearn/SelectQuantity';
import SouvenirBuyButton from './SouvenirBuyButton/SouvenirBuyButton';


class Souvenir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            active1: false,
            active13: false,
            city: 2,
            dropDown: false,
            counter: 1,
            price: this.props.price
        };

        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.changed = this.changed.bind(this);
        this.close = this.close.bind(this);
        this.modalSouvenir = this.modalSouvenir.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.ChekCity = this.ChekCity.bind(this);
        this.change = this.change.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    plusOne() {
        this.setState({
            counter: ++this.state.counter
        });
    }
    minusOne() {
        if(this.state.counter > 0)
            this.setState({
                counter: --this.state.counter
            });
    }
    change() {
        this.setState({
            dropDown: !this.state.dropDown
        });
        document.getElementsByClassName(styles.arrowInput)[0].classList.toggle(styles.rotate);
    }

    ChekCity(e) {
        let text = e.target.getAttribute('citytext');
        // let selectedPrice = e.target.getAttribute('price');
        this.setState(prevState => ({
            city: prevState.city = text,
            // price: prevState.price = selectedPrice
        }));
        this.change();
    }

    handleChange(event, index, value) {
        this.setState({ value });
    }

    changed() {
        this.setState({
            active1: true
        });
    }

    closeModal() {
        this.setState({
            active13: !this.state.active13
        });
        this.close();
    }

    close() {
        this.setState({
            active1: false
        });
    }

    modalSouvenir() {
        this.setState({
            active13: true
        });

    }

    componentDidMount() {
        console.log(this.state.data);
    }

    render() {
        const image = `http://${window.host}/images/souveniers/${this.props.image}`;
        let stars = [];
        for (let i = 1; i <= this.props.rating; i++) {
            stars.push(<Stars />);
        }
        return [
            <div className={styles.Cards}>
                <ModalSouvenir
                    itemId={this.props.id}
                    active13={this.state.active13}
                    click={this.closeModal}
                    counter={this.state.counter}
                    product={this.props.product}
                    price={this.state.price}
                    image={this.props.image}
                />
                <div className={styles.ImageFilter}>
                    <div className={styles.Images} style={{ backgroundImage: `url(${image})` }}>
                        <p> {this.props.product} </p>
                        <div className={styles.Stars}>
                            {stars}
                        </div>
                    </div>
                    <div className={styles.Filter}></div>
                </div>
                <div className={styles.Learn}>
                    <div className={styles.Watch}>
                        <SelectQuantity
                            plus={this.plusOne}
                            minus={this.minusOne}
                            counter={this.state.counter}
                            active1={this.state.dropDown}
                            ChekCity={this.ChekCity}
                            change={this.change}
                            choicasdes={this.props.choiceses}
                            quantity={this.state.city}
                            text="штук"
                            icons={require('../../../../img/mathematical-basic-signs-of-plus-and-minus-with-a-slash.png')}
                        />
                        <div className={styles.Tenge}>
                            <p>₸</p>
                            <p><span> {this.state.price * this.state.counter}</span></p>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p> {this.props.text} </p>
                    </div>
                    <SouvenirBuyButton click={this.modalSouvenir} />
                    {/*<a onClick={this.closeModal}> modal </a>*/}
                    <div className={styles.learnMore}>
                        <a onClick={this.changed}> Подробнее </a>
                        <img
                            onClick={this.changed}
                            src={require('../../../../img/right-arrow.svg')}
                            alt=""
                        />
                    </div>
                </div>
            </div>,
            <Select
                click={this.closeModal}
                image={this.props.image}
                city={this.state.city}
                description={this.props.description}
                title={this.props.text}
                counter={this.state.counter}
                active1={this.state.active1}
                price={this.state.price}
                close={this.close}
            />
        ];
    }
}

export default Souvenir;
