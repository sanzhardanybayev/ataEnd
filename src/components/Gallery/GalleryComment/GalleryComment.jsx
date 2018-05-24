import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.css';
import InputMask from 'react-input-mask';
import styles from './style.scss';


export default class GalleryComment extends React.Component {

    constructor(props) {
        super(props);
    }
    send = (e) => {
        e.preventDefault();
        const URL = `http://${window.host}/galleryimages/${this.props.itemId}/comments`;
        const formData = new FormData(e.target);
        axios.post(URL, formData)
            .then((res) => {
                console.log(res.data);
            }).catch(() => {
                // React Toastify
            });
    }
    render() {

        return(
            <div className={styles.comment}>
                <h5> ОСТАВИТЬ КОММЕНТАРИИ </h5>
                <form onSubmit={this.send}>
                    <div>
                        <input name="name" placeholder='Имя*' type="text" required />
                        {/* <input name="phoneNumber" placeholder='Телефон' type="text" required/> */}
                        <InputMask {...this.props} name="phoneNumber" mask="+7 999 999 99 99" maskChar="" placeholder="Телефон" required />
                    </div>
                    <input name="email" placeholder='E-mail*' type="email" required />
                    <textarea placeholder='Текст сообщения' name="text" required />
                    <button type="submit"> Оставить комментарии </button>
                </form>
            </div>


        );
    }
}
