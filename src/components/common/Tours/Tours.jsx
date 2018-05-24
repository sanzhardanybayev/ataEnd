import React from 'react';
import styles from './style.scss';
import Stars from '../Stars/Stars';
import BuyButton from '../buyButton/buyButton';
import SelectContent from '../Facilities/selectContentFilter';
import ToursModal from './ToursModal/ToursModal';
import SelectTime from '../SelectLearn/SelectTime';


class Tours extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            active: false,
            active1: false,
            active13: false,
            dropDown: false,
        };
        if(this.props.choices[0]){
            this.state = {
                ...this.state,
                time: this.props.choices[0].value,
                price: this.props.choices[0].tickets[0].price
            }
        }


        this.changed = this.changed.bind(this);
        this.close = this.close.bind(this);
        this.modalSouvenir = this.modalSouvenir.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.ChekCity = this.ChekCity.bind(this);
        this.change = this.change.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    change() {
        this.setState({
            dropDown: !this.state.dropDown
        });
        document.getElementsByClassName(styles.arrowInput)[0].classList.toggle(styles.rotate);
    }
    ChekCity(e) {
        const text = e.target.getAttribute('cityText');
        const selectedPrice = e.target.getAttribute('price');
        this.setState(prevState => ({
            time: prevState.time = text,
            price: prevState.price = selectedPrice
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
            active13: false
        });
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

    render() {
        const image = `http://${window.host}/images/tours/${this.props.image}`;
        let stars = [];
        for (let i = 1; i <= this.props.rating; i++) {
            stars.push(<Stars />);
        }
        const boon = this.props.boon.map((item) => {
            return (
                <SelectContent static={true} type={item} />
            );
        });
        return [

            <div className={styles.Cards}>
                <ToursModal
                    active13={this.state.active13}
                    click={this.closeModal}
                    product={this.props.product}
                    price={this.state.price}
                    image3="indo3.jpg"
                />
                <div className={styles.Images} style={{ backgroundImage: `url(${image})` }}>
                    <p className={styles.tour}> Тур </p>
                    <div className={styles.Filter} />
                    <p> {this.props.product} </p>
                    <div className={styles.Stars}>
                        {stars}
                    </div>
                </div>
                <div className={styles.Learn}>
                    <div className={styles.Watch}>
                        <SelectTime
                            active1={this.state.dropDown}
                            choices={this.props.choices}
                            ChekCity={this.ChekCity}
                            change={this.change}
                            time={this.state.time}
                            icons={require('../../../../img/stopwatch.svg')}
                        />
                        <div className={styles.Tenge}>
                            <p>₸</p>
                            <p> <span> {this.state.price}</span></p>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p> {this.props.text} </p>
                    </div>
                    <BuyButton click={this.modalSouvenir} url={`/tours/${this.props.id}`}/>
                    <div className={styles.learnMore}>
                        <div className={styles.Left}>
                            {boon}
                            {/*<img src={require('../../../../img/sun.svg')} />*/}
                            {/*<img src={require('../../../../img/quran.svg')} />*/}
                        </div>
                        {/*<div className={styles.Right}>*/}
                            {/*<img src={require('../../../../img/right-arrow.svg')} alt="" />*/}
                            {/*<a onClick={this.changed} href={`/tours/${this.props.id}`}> Подробнее </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        ];
    }
}

export default Tours;
