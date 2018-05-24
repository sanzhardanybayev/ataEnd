import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from './style.scss';
import GalleryReviews from "../../GalleryReviews/GalleryReviews";
import GalleryComment from "../GalleryComment/GalleryComment";


export default class GalleryModal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div className = {[styles.modalFixed, ((this.props.active) ? styles.show2 : '')].join(' ')}>
                {/*<div className={styles.Filter}></div>*/}
                {/*<div className={['container', styles.Modal].join(' ')}>*/}
                    {/*<div className={styles.textClose}>*/}
                        {/*<h6> {this.props.people} </h6>*/}
                        {/*<span onClick={this.props.click}>  </span>*/}
                    {/*</div>*/}
                    {/*<div className={styles.image}>*/}
                        {/*<img src={this.props.image} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.geolocation}>*/}
                        {/*<div className={styles.placeholder}>*/}
                            {/*<img src={require('../../../../img/gallery/placeholder1.svg')} alt=""/>*/}
                            {/*<p> {this.props.geo} </p>*/}
                        {/*</div>*/}
                        {/*<div className={styles.calendars}>*/}
                            {/*<img src={require('../../../../img/gallery/calendar1.svg')} alt=""/>*/}
                            {/*<p> {this.props.data} </p>*/}
                        {/*</div>*/}
                        {/*<div className={styles.profile}>*/}
                            {/*<img src={require('../../../../img/icons/profile.png')} alt=""/>*/}
                            {/*<p> {this.props.user} </p>*/}

                        {/*</div>*/}

                    {/*</div>*/}
                    {/*<div className={styles.description}>*/}
                        {/*<h6> Описание:  </h6>*/}
                        {/*<span> {this.props.title} </span>*/}

                    {/*</div>*/}
                    {/*<div className={styles.slider}>*/}
                        {/*<GalleryReviews />*/}

                    {/*</div>*/}
                    {/*<div className={['col-lg-12 col-md-12 col-sm-12 row', styles.comments].join(' ')} >*/}
                        {/*<GalleryComment />*/}

                    {/*</div>*/}

                {/*</div>*/}
            </div>

        );
    }
}
