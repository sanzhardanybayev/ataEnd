import React from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import styles from './style.scss';
import ModuleButton from '../../ModuleBatton/ModuleButton';
import Comments from './Comments/Comments';


export default class CommentSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        if (this.props.comments.length < 1) {
            return null;
        }

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            accessibility: false,
            centerMode: true,
            responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
            lazyLoad: true

        }
        const comments = this.props.comments.map((comment) => {
                return (
                        <Comments
                            img={comment.photo}
                            name={comment.name}
                            text={comment.text}
                            date={comment.createdAt}
                        />
                );
        });
        
        return (
            <div className={[styles.back, (comments.length <= 2) ? styles.noArrows : ''].join(' ')}>
                <h2> Отзывы наших туристов </h2>
                <Slider {...settings}>
                    {
                        comments
                    }
                </Slider>
                <ModuleButton click={this.props.click} text="Оставить отзыв" />
            </div>
        );
    }
}
