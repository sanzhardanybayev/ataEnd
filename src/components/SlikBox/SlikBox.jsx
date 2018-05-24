import React from 'react';
import Slider from 'react-slick';
import Reviews from "../Reviews/Reviews";
import Db from '../../Db/DateBase.json';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './styles.scss';

export default class SlikBox extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3
        };
        return (
            <Slider {...settings}>
                <Reviews img={Db[0].url} name={Db[0].name} text={Db[0].text} date={Db[0].date}/>
                <Reviews img={Db[0].url} name={Db[0].name} text={Db[0].text} date={Db[0].date}/>
                <Reviews img={Db[0].url} name={Db[0].name} text={Db[0].text} date={Db[0].date}/>
                <Reviews img={Db[0].url} name={Db[0].name} text={Db[0].text} date={Db[0].date}/>
                <Reviews img={Db[0].url} name={Db[0].name} text={Db[0].text} date={Db[0].date}/>
            </Slider>
        );
    }
}