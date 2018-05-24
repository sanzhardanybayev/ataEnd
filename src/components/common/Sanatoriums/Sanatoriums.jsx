import React from 'react';
import styles from './style.scss';
import Stars from '../Stars/Stars';
import BuyButton from '../buyButton/buyButton';
import SelectLearn from '../SelectLearn/SelectLearn';
import SelectContent from '../Facilities/selectContentFilter';
import SanatoriumsModal from './SanatorimsModal/SanatoriumsModal';


class Tours extends React.Component {
    constructor(props) {
        super(props);
        let item = '', price = '';
        try {
            item = this.props.rooms[0].name,
            price = this.props.rooms[0].price;
        } catch(err) {}
        this.state = {
            dropDown: false,
            active13: false,
            item,
            price
        };

        this.modalSouvenir = this.modalSouvenir.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.ChekItem = this.ChekItem.bind(this);
        this.change = this.change.bind(this);
    }

    change() {
        this.setState({
            dropDown: !this.state.dropDown
        });
    }
    ChekItem(e) {
        const text = e.target.getAttribute('cityText'),
            selectedPrice = e.target.getAttribute('price');
        this.setState(prevState => ({
            item: prevState.item = text,
            price: prevState.price = selectedPrice
        }));
        this.change();
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

    render() {
        const image = `http://${window.host}/images/sanatorium/${this.props.imagePreview}`;
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
                <SanatoriumsModal
                    active13={this.state.active13}
                    click={this.closeModal}
                    product={this.props.product}
                    item={this.state.item}
                    price={this.state.price}
                    image3={('mal.jpg')}
                />
                <div className={styles.Images} style={{backgroundImage: `url(${image})`}} >

                    <p className={styles.tour}> Санатории </p>
                    <div className={styles.Filter}></div>
                    <p> {this.props.product} </p>
                    <div className={styles.Stars}>
                        {stars}
                    </div>
                </div>
                <div className={styles.Learn}>
                    <div className={styles.Watch}>
                        <SelectLearn
                            active1={this.state.dropDown}
                            city={this.state.item}
                            ChekCity={this.ChekItem}
                            change={this.change}
                            choices={this.props.rooms}
                            icons={require('../../../../img/icons/key.png')}
                        />
                        <div className={styles.Tenge}>
                            <p>₸</p>
                            <p> <span> {this.state.price}</span></p>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p> {this.props.shortDescription} </p>
                    </div>
                    <BuyButton url={`/sanatoriums/${this.props.id}`} click={this.modalSouvenir} />
                    <div className={styles.learnMore}>
                        <div className={styles.Left}>
                            {boon}
                        </div>
                        {/*<div className={styles.Right}>*/}
                            {/*<img src={require('../../../../img/right-arrow.svg')} alt=""/>*/}
                            {/*/!*<a onClick={this.changed} href="/#SanatoriumMore"> Подробнее </a>*!/*/}
                            {/*/!*<Link to={`/sanatoriums/${this.props.id}`}> Подробнее </Link>*!/*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        ];
    }

}

export default Tours;
