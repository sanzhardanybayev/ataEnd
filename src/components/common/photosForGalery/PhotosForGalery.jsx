import React from 'react';
import styles from './style.scss';


export default class PhotosForGalery export React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={'col-12 col-md-6 py-5'}>
                <div className={styles.photo} style={{backgroundImage: `url('../../../img/${this.props.img}')`}}>
                    <h4>{this.props.description}</h4>
                </div>
            </div>
        );
    }
}
