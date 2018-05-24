import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle
} from 'material-ui/Dialog';
import 'bootstrap/dist/css/bootstrap-grid.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Player } from 'video-react';
import moment from 'moment';
import styles from './style.scss';
import galleryStyles from './GalleryModal/style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GalleryImage from './GalleryImage/GalleryImage';
import GalleryComment from './GalleryComment/GalleryComment';
import GalleryReviews from '../GalleryReviews/GalleryReviews';
import GalleryVideo from './GalleryVideo/GallieryVideo';
import CommentSlider from '../common/CommentSlider/CommentSlider';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activeImage: 0,
            open: false,
            loading: true,
            data: undefined,
            videos: undefined
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.open = this.open.bind(this);
        this.openVideo = this.openVideo.bind(this);

        this.playPause = this.playPause.bind(this);
    }
    componentDidMount() {
        this.getImages(this.getVideos);
    }
    playPause ( ) {
        let myVideo = document.getElementById('video1');
        console.log(123);

        function playPause () {
            if (myVideo.paused)
                myVideo.play();
            else
                myVideo.pause();
        }
        console.log(23);
    }
    getImages = (callback) => {
        const self = this;
        axios.get(`http://${window.host}/galleryimages`)
            .then(({ data: { data } }) => {
                console.log('Images --->');
                console.log(data);
                data.forEach((item) => {
                    item.createdAt = moment(item.createdAt).format('ll');
                });
                self.setState({ data });
                callback();
            });
    }
    getVideos = () => {
        const self = this;
        axios.get(`http://${window.host}/galleryvideos`)
            .then(({ data: { data } }) => {
                console.log('Videos --->');
                console.log(data);
                data.forEach((item) => {
                    item.createdAt = moment(item.createdAt).format('ll');
                });
                self.setState({ videos: data, loading: false });
            });
    }

    handleClickOpen(activeImage) {
        this.setState({ active: true });
        this.setState({ activeImage });
    }

    handleClose() {
        this.setState({ active: false });
    }
    openVideo() {
        this.setState({
            openVideo: !this.state.openVideo
        });
    }
    open() {
        this.setState({
            open: !this.state.open
        });
    }
    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        moment.locale('ru');
        if(this.state.loading) {
            return (
                <div>loading...</div>
            );
        }
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        const current = this.state.data[this.state.activeImage];
        console.log(current);
        return (
            <div>
                {/*<GalleryModal active={this.state.active} click={this.closeModal} /> */}
                <Header
                    background="1.jpg"
                    miniTitle="Галерея"
                    title="Галерея"
                    text="Мой Казахстан – это самая дорогая, важная, драгоценная, горячо любимая страна. Это Родина моя…"
                />
                <div>
                    <span className={styles.line} />
                </div>
                <div className={['container', styles.Gallery].join(' ')}>
                    <div className={['row', styles.row].join(' ')}>
                        <div className={['col-lg-12 col-md-12 col-sm-12', styles.Info].join(' ')}>
                            <div className={['col-lg-12 col-md-12 col-sm-12 row', styles.choice].join(' ')}>
                                <a ><AnchorLink offset='-300' href='#image'> Фотографии </AnchorLink>  <span className={styles.after} /> <span
                                    className={styles.before}
                                />
                                </a>
                                <a id={styles.after} > <AnchorLink offset='-300' href='#video'> Видео </AnchorLink> <span className={styles.after} /> <span
                                    className={styles.before}
                                />
                                </a>
                            </div>
                            <div className={['col-lg-12 col-md-12 col-sm-12 row', styles.Fotography].join(' ')}>
                                <h3> Фотографии </h3>
                            </div>
                            <div id='image' className={['col-lg-12 col-md-12 col-sm-12 row', styles.allImage, ((this.state.open) ? styles.hide1 : '')].join(' ')}>
                                {
                                    this.state.data.map((image, index) => {
                                        return (
                                            <GalleryImage
                                                id={image.id}
                                                user={image.name}
                                                title={image.description}
                                                dispatcher={() => this.handleClickOpen(index)}
                                                image={image.image}
                                                people={image.title}
                                                geo={image.location}
                                                data={image.createdAt}
                                            />);
                                    })
                                }
                            </div>
                            {
                                (this.state.data.length > 6) ? 
                                    (<div className={styles.butt}>
                                        <a
                                            onClick={this.open}
                                            className={[styles.showMore, ((this.state.open) ? styles.showMore1 : '') ].join(' ')}
                                        > Посмотреть еще </a>
                                    </div>) : ''
                            }
                            
                            <div id={styles.video} className={['col-lg-12 col-md-12 col-sm-12 row', styles.Fotography].join(' ')}>
                                <h3> Видео </h3>
                            </div>
                            <div id='video' className={['col-lg-12 col-md-12 col-sm-12 row', styles.video, ((this.state.openVideo) ? styles.hide2 : '')].join(' ')}>
                                {
                                    this.state.videos.map((video) => {
                                        return (
                                            <GalleryVideo
                                                key= {video._id}
                                                url={video.url}
                                                mountains={video.title}
                                                geolocation={video.location}
                                                dateVideo={video.createdAt} 
                                            />
                                        );
                                    })
                                }
                                {/*<YouTube*/}
                                    {/*videoId="2g811Eo7K8U"*/}
                                    {/*opts={opts}*/}
                                    {/*onReady={this._onReady}*/}
                                {/*/>*/}
                                {/*<button onClick={this.playPause}>Play/Pause</button>*/}
                                {/*<Player id="video1">*/}
                                    {/*<source id="video1" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />*/}
                                {/*</Player>*/}
                                    {/*<Player>*/}
                                        {/*<source src="../../../video/thechainsm_ASrFrYdi.mp4" type="video/mp4">*/}
                                            {/*<source src="../../../video/thechainsm_ASrFrYdi.ogg" type="video/ogg">*/}
                                    {/*</Player>*/}
                            </div>
                            {
                                (this.state.videos.length > 6) ?
                                    (<div className={styles.butt}>
                                        <a onClick={this.openVideo} className={[styles.showMore, ((this.state.openVideo) ? styles.showMore1 : '') ].join(' ')} > Посмотреть еще </a>
                                    </div>) : ''
                            }
                            
                        </div>
                    </div>
                </div>
                <Dialog
                    open={this.state.active}
                    onClose={this.handleClose}
                    transition={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    // style={{width: '100%', maxWidth: "none"}}
                    maxWidth = {'md'}
                >
                    {/*<DialogTitle id="alert-dialog-title">*/}
                    {/*</DialogTitle>*/}
                    {/*<DialogActions>*/}
                        {/*/!*<Button onClick={this.handleClose} color="primary">*!/*/}
                            {/*/!*Disagree*!/*/}
                        {/*/!*</Button>*!/*/}
                        {/*/!*<Button className={styles.closeButton}  color="primary" autoFocus>*!/*/}
                            {/*/!*Закрыть*!/*/}
                        {/*/!*</Button>*!/*/}


                    {/*</DialogActions>*/}
                    <DialogContent 
                     style={{width: '100%', maxWidth: '100%' , minWidth: '100%'}}
                     >
                        <div className={['container', galleryStyles.Modal].join(' ')}>
                            <div className={galleryStyles.textClose}>
                                <h6> { current.title} </h6>
                                <img className={styles.closeButton} onClick={this.handleClose} src={require('../../../img/close.svg')} alt=""/>
                            </div>
                            <div
                                className={galleryStyles.image}
                                style={{backgroundImage: `url(${`http://${window.host}/images/gallery/${current.image}`})` }}>
                                <img src={`http://${window.host}/images/gallery/${current.image}`} alt="" />
                            </div>
                            <div className={galleryStyles.geolocation}>
                                <div className={galleryStyles.placeholder}>
                                    <img src={require('../../../img/gallery/placeholder1.svg')} alt="" />
                                    <p> { current.location} </p>
                                </div>
                                <div className={galleryStyles.calendars}>
                                    <img src={require('../../../img/gallery/calendar1.svg')} alt="" />
                                    <p> { current.createdAt } </p>
                                </div>
                                <div className={galleryStyles.profile}>
                                    <img src={require('../../../img/icons/profile.png')} alt="" />
                                    <p> { current.name} </p>
                                </div>
                            </div>
                            <div className={galleryStyles.description}>
                                <h6> Описание: </h6>
                                <span> { current.description} </span>

                            </div>
                            <div className={galleryStyles.slider}>
                                <GalleryReviews btnRequired={false} comments={current.comments} />
                                {/* <CommentSlider comments={current.comments} /> */}
                            </div>
                            <div className={['row', galleryStyles.comments].join(' ')}>
                                <GalleryComment itemId={current._id} />
                            </div>
                        </div>
                    </DialogContent>

                </Dialog>
                <Footer />
            </div>

        );
    }
}