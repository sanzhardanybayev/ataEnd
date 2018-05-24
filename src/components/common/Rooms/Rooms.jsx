import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import $ from 'jquery';
import RoomText from   './RoomText/RoomText';
import ChooseButton from   '../ChooseButton/ChooseButton';
import SanatoriumsModal from  '../Sanatoriums/SanatorimsModal/SanatoriumsModal';
import styles from './style.scss';


class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            active1: false,
            active13: false
        };

        this.changed = this.changed.bind(this);
        this.close = this.close.bind(this);
        this.modalSouvenir = this.modalSouvenir.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
            active13:true
        });
    }

    render() {
        const slides = this.props.images.map((image, index) => {
            const styleSlide = {
                backgroundImage: `url(http://${window.host}/images/sanatorium/rooms/${image})`
            };
            const active = (index == 0) ? 'active' : '';
            return (
                <div className={['carousel-item', active, styles.carousel1].join(' ')}>
                    <div style={styleSlide} className="d-block w-100" />
                </div>
            );
        });
        const roomText = this.props.list.map(item => {
            return (
                <RoomText name={item} />
            );
        });

        return (
            <div className={styles.Rooms}>
                <SanatoriumsModal
                    number={this.props.comfort}
                    itemId={this.props.id}
                    room={this.props.room}
                    active13={this.state.active13}
                    close={this.closeModal}
                    item={this.props.comfort}
                    product={this.props.product}
                    price={this.props.price}
                    image3={('mal.jpg')}
                />
                <div className={styles.Image}>
                    <div className={styles.BlackFilter} />
                    <div
                        id={this.props.id}
                        className={[' carousel slide ', styles.carousel].join(' ')}
                        data-ride="carousel"
                    >
                        <div className={['carousel-inner', styles.carousel1].join(' ')}>
                            {slides}
                        </div>
                        <a className="carousel-control-prev" href={`#${this.props.id}`} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={`#${this.props.id}`} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <h3> {this.props.comfort} </h3>

                </div>
                <div className={styles.title}>
                    {roomText}
                </div>
                <div className={styles.price}>
                    <img src={require('../../../../img/money-bag.svg')} alt=""/>
                    <p> {this.props.price} <span> ₸ </span> </p>
                </div>
                <div className={styles.butt}>
                    <ChooseButton click={this.modalSouvenir} />
                </div>

            </div>

        );
    }

}

export default Rooms;

