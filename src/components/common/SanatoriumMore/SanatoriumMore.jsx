import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { LinearProgress } from 'material-ui/Progress';
import styles from './style.scss';
import Search from '../../SearchSanatorium/SearchSanatorium';
import Rooms from '../Rooms/Rooms';
import GalleryReviews from '../../GalleryReviews/GalleryReviews';
import SliderCarousel from '../SliderCarousel/SliderCarousel';
import Medicina from '../Medicina/Medicina';
import Transfers from '../Transfers/Transfers';
import AboutUs from '../AboutUs/AboutUs';
import RoomAdvantage from '../RoomAdvantage/RoomAdvantage';
import LineServices from '../LineServices/LineServices';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import SearchSmallScreen from '../SearchSmallScreen/SearchSmallScreen';
import CommentSlider from '../CommentSlider/CommentSlider';
import CreateComment from '../../FirstPage/CreateComment/CreateComment';
import SanatoriumsModal from '../Sanatoriums/SanatorimsModal/SanatoriumsModal';

class SanatoriumMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active333: false,
            loading: false,
            data: []
        };
        this.changed = this.changed.bind(this);

    }


    componentDidMount() {
        const self = this,
        commmentsURL = `http://${window.host}/comments`;
        axios.get(`http://${window.host}/sanatoriums/${this.props.match.params.id}`)
            .then((res) => {
                console.log(res.data.data);
                self.setState({
                    data: res.data.data,
                    loading: true
                });
            }).catch((err) => {
                console.log(err);
            });
        axios.get(commmentsURL)
            .then((res) => {
                console.log(res.data.data);
                self.setState({
                    comments: res.data.data
                });
            }).catch((err) => { console.log(err); });
    }

    changed() {
        this.setState({
            active333: true
        });
    }

    render() {
        if (this.state.loading === false) { return <div className={styles.progresPreloader}>
            <h5> Идет загрузка страницы... </h5>
            <LinearProgress mode="determinate" value={this.state.completed} />
        </div>; }
        const rooms = this.state.data.rooms.map((room) => {
            const { _id, price, list, name, images } = room;
            return (
                <Rooms
                    id={_id}
                    room={room}
                    images={images}
                    product={"РАХИМ"}
                    list={list}
                    comfort={name}
                    price={price}
                />
            );
        });
        return (
            <div>
                <Header
                    background="sanatori.jpg"
                    miniTitle="Санатории"
                    title={this.state.data.name}
                    text={this.state.data.shortDescription}
                />
                <section className={styles.sanatorii}>
                    <span className={styles.line} />
                    <div className={['container', styles.section1].join(' ')}>
                        <div className={['row', styles.row].join(' ')}>
                            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.infoContainer].join(' ')} >
                                <Search type={'sanatoriums'}/>
                                <SearchSmallScreen type={'sanatoriums'}/>

                            </div>
                            <LineServices click={this.changed} />
                            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.ourRooms].join(' ')} >
                                <h3 className={styles.room}> Наши номера </h3>
                                <div id="one" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.ourRooms1].join(' ')} >
                                    {rooms}
                                </div>
                                <RoomAdvantage />
                                <Medicina />
                                <Transfers data={this.state.data.transfers}  />
                                <AboutUs text={this.state.data.aboutUs} />
                                <div className={['container', styles.new123].join(' ')}>
                                    <SliderCarousel type="sanatorium" id="hsd213" images={this.state.data.slider} />
                                </div>
                                <div id="Gallery" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Comment].join(' ')} >
                                    <GalleryReviews type="sanatoriums" _id={this.state.data._id} comments={this.state.data.comments} />

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

export default SanatoriumMore;
