import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from './style.scss';


const GalleryImage = ({id, dispatcher, image, people, geo, data}) =>
    (
        <div className={styles.Image}  style={{backgroundImage: `url(${`http://${window.host}/images/gallery/${image}`})`}}>
            <div className={styles.Filter}></div>
            <div id={id} onClick={dispatcher} className={['container', styles.text].join(' ')}>
                <h3> {people} </h3>
                <div className={styles.placeholder}>
                    <img src={require('../../../../img/gallery/placeholder.svg')} alt="" />
                    <p> {geo} </p>
                </div>
                <div className={styles.calendar}>
                    <img src={require('../../../../img/gallery/calendar.svg')} alt="" />
                    <p> {data} </p>
                </div>
            </div>
        </div>
    );

export default GalleryImage;

