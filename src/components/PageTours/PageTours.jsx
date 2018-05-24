import React from 'react';
import axios from 'axios';
import { LinearProgress } from 'material-ui/Progress';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap-grid.css';

import styles from './style.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../SearchSanatorium/SearchSanatorium';
import CardsTour from '../common/CardsTour/CardsTour';
import CardsCar from '../common/CardsTour/CardsCar/CardsCar';
import History from './History/History';
import SliderCarousel from '../common/SliderCarousel/SliderCarousel';
import GalleryReviews from '../GalleryReviews/GalleryReviews';
import MapContainer from '../common/GoogleMap/MapContainer';
import TourAncorlink from './TourAncorlink/TourAncorlink';
import Ticket from '../common/Ticket/Ticket';
import DayButton from '../common/DayButton/DayButton';
import Basket from '../common/Basket/Basket';
import { ticketsLoaded } from '../../actions/cartActions';
import SearchSmallScreen from '../common/SearchSmallScreen/SearchSmallScreen';
import CreateComment from '../FirstPage/CreateComment/CreateComment';
import CommentSlider from '../common/CommentSlider/CommentSlider';

class PageTours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            active13: false,
            data: [],
            completed: 0,
            durationIndex: 0
        };
        this.changed = this.changed.bind(this)
        this.changeDuration = this.changeDuration.bind(this);
        this.component = this.component.bind(this);
    }

    changed() {
        this.setState({
          active13: !this.state.active13
        })
      }

    component() {
        this.timer = setTimeout(() => this.progress(5), 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }
    componentDidMount() {
        const self = this;
        axios.get(`http://${window.host}/tours/${this.props.match.params.id}`)
            .then((res) => {

                let tickets = [];
                console.log(res.data.data);
                
                self.props.ticketsLoaded({
                    tickets: res.data.data.duration[0].tickets
                });
                self.setState({
                    data: res.data.data,
                    loading: true
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    changeDuration(value) {
        this.setState({
            durationIndex: value
        });
        this.props.ticketsLoaded({
            tickets: this.state.data.duration[value].tickets
        });
    }

    render() {
        if (this.state.loading === false) { return <div className={styles.progresPreloader}>
            <h5> Идет загрузка страницы... </h5>
            <LinearProgress mode="determinate" value={this.state.completed} />
        </div>; }
        let tickets = [],
            durations = [],
            transport = [],
            plan = [],
            item = [];
        durations = this.state.data.duration.map(item => item.value);

        item = this.state.data.duration[this.state.durationIndex];
        tickets = item.tickets.map(ticket =>
            <Ticket
                type={ticket.type}
                price={ticket.price}
                content={ticket.content}
            />);

        transport = item.transport.map(car => {
            let image;
            switch (car) {
                case 'автобус':
                    image = 'bus';
                    break;
                case 'легковая машина': 
                    image = 'car';
                    break;
                default:
                    image = 'surf-van';
                    break;
            }
            return (
                <CardsCar
                    car={require(`../../../img/${image}.svg`)}
                    text={car}
                />
            );
        });
        plan = item.plan.map((x, index) => {
            return (
                <CardsTour
                    day={index + 1}
                    content={x}
                />
            );
        });
        return (
            <div>
                <Header
                    background="123.jpg"
                    miniTitle="Туры"
                    title={this.state.data.name}
                    text={this.state.data.shortDescription}

                />

                <section className={styles.section2}>
                    <Basket
                        product={this.state.data.name}
                        booking={false}
                        tickets={tickets}
                        itemId={this.state.data._id}
                    />
                    <span className={styles.line} />
                    <div className={['container', styles.section].join(' ')}>
                        <div className={['row', styles.row].join(' ')}>
                            <Search type={'tours'}/>
                            <SearchSmallScreen type={'tours'}/>
                            <TourAncorlink />
                            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.dayButton].join(' ')} >
                                <DayButton
                                    data={this.state.data.duration}
                                    changeDuration={this.changeDuration}
                                />
                            </div>
                            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.cards].join(' ')} >
                                <div className={['col-lg-8 col-md-8 col-sm-12 hidden-md-down row', styles.left].join(' ')} >
                                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.top].join(' ')} >
                                        <h3> Маршрут следования </h3>
                                        <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.center].join(' ')} >
                                            <div className={['col-lg-8 col-md-8 col-sm-12 hidden-md-down row', styles.day].join(' ')} >
                                                {
                                                    plan
                                                }
                                            </div>
                                            <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.transport].join(' ')} >
                                                <h6> Транспорт </h6>
                                                {
                                                    transport
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.bottom].join(' ')} >
                                        <div className={styles.interText}>
                                            <h6> Интерактивная карта. </h6>
                                            <p> Что бы узнать подробнее о городе,
                                                 который указан на карте, наведите на красную
                                                 точку рядом с ним
                                            </p>
                                        </div>
                                        <div id="two" className={styles.Interactive}>
                                            <MapContainer coords={item.coords} />

                                        </div>
                                        <div id="history" className={styles.History}>
                                            <h2> История </h2>
                                            <History text={this.state.data.description} />
                                        </div>

                                    </div>
                                </div>
                                <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down', styles.right].join(' ')} >
                                    <div className={styles.Fixed}>
                                        <h3> билет </h3>
                                        <div className={styles.right1} >
                                            {
                                            tickets
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.slider].join(' ')} >
                                <SliderCarousel type="tours" id="hsd213" images={this.state.data.slider} />

                            </div>
                            <div id="comment" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.comment].join(' ')} >

                                <div className={'container'}>
                                <GalleryReviews type="tours" _id={this.state.data._id} comments={this.state.data.comments} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ticketsLoaded
    }, dispatch);
};

export default connect(null, matchDispatchToProps)(PageTours);
