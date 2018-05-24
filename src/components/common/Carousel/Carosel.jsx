import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/js/bootstrap.min';


export default class Carousel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const styleSlide = {
<<<<<<< HEAD
            backgroundImage: `url(${this.props.img})`,
            height: 280,
            background-repeat: 'no-repeat',
            background-size: 'contain'
    }
=======
            backgroundImage: `url('${this.props.img}')`,
        }
>>>>>>> c9434a8db70cab09c4ed444da65c249b143b8168
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-block w-100" style={styleSlide}></div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block w-100" style={styleSlide}></div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block w-100" style={styleSlide}></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    };
}
