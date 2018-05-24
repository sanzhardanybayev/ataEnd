import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from './style.scss';


class SliderCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const self = this;
        const slides = this.props.images.map((image, index) => {
            const item = `http://${window.host}/images/${self.props.type}/${image}`;
            const active = (index == 0) ? 'active' : '';
            return (
                <div className={['carousel-item', active, styles.carousel1].join(' ')}>
                    <div style={{ backgroundImage: `url(${item})` }} className="d-block w-100" />
                </div>);
        });
        if (slides.length < 1) {
            return null;
        }
        return (
            <div id={this.props.id} className={[' carousel slide ', styles.carousel].join(' ')} data-ride="carousel">
                <div className={['carousel-inner', styles.carousel1].join(' ')}>
                    {
                        slides
                    }
                </div>
                <a className="carousel-control-prev" href={`#${this.props.id}`} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${this.props.id}`} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }

}

export default SliderCarousel;

