import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';

import ReactPlayer from 'react-player';
import styles from './styles.scss';

class GalleryVideo extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className={styles.videoText}>
                <div className={styles.text}>
                    <h3> {this.props.mountains} </h3>
                    <div className={styles.placeholder}>
                        <img src={require('../../../../img/gallery/placeholder.svg')} alt="" />
                        <p> {this.props.geolocation} </p>
                    </div>
                    <div className={styles.calendar}>
                        <img src={require('../../../../img/gallery/calendar.svg')} alt="" />
                        <p> {this.props.dateVideo} </p>
                    </div>
                </div>
                <ReactPlayer   url= {this.props.url}
                               width='100%'
                               height='100%'
                               controls
                               loop={true}
                />
            </div>


        );
    }

}

export default GalleryVideo;
