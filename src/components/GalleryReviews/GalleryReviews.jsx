import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moment from 'moment';
import Db from '../../Db/DateBase.json';
import Reviews from '../Reviews/Reviews';
import './styles.css';
import SampleNextArrow from './next';
import ModuleButton from '../ModuleBatton/ModuleButton';
import CreateComment from '../FirstPage/CreateComment/CreateComment';


export default class GalleryReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active13: false
        };
        this.changed = this.changed.bind(this)
    }

    changed() {
        this.setState({
          active13: !this.state.active13
        })
      }


    render() {
        moment.locale('ru');
        const settings = {
            dots: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            adaptiveHeight: true,
            accessibility: false,
            centerMode: false,
            responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
            lazyLoad: true
        };
       
        const comments = this.props.comments.map((comment) => {
                return (
                    <div>
                        <Reviews
                            img={comment.photo}
                            name={comment.name}
                            text={comment.text}
                            date={moment(comment.createdAt).format('ll')}
                        />
                    </div>
                );
        });
        if (comments.length < 1) {
            return null;
        }
        const button = (this.props.btnRequired == undefined) ?
           <ModuleButton click={this.changed} text="Оставить отзыв" /> : '';
        return (
            <div className="wraperForGallery">
                <CreateComment type={this.props.type} _id={this.props._id} click={this.changed} active13={this.state.active13} />
                <h2 className="headForGallery">ОТЗЫВЫ НАШИХ ТУРИСТОВ</h2>
                <div className={['container-fluid galere'].join(' ')}>
                    <Slider {...settings}>
                        {
                            comments
                        }
                    </Slider>
                </div>
                {button}
            </div>
        );
    }
}

