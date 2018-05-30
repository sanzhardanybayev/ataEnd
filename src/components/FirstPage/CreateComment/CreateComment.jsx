import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.css';
// import PropTypes from 'prop-types';
// import { FileInput, TextField, Snackbar } from 'react-md';

// import { QUOTATION_MARK } from 'constans/unicode';
import styles from './style.scss';

// const Input = ({ onChange, className }) => (
//     <FileInput
//       id="duplicate-file-selection"
//       label="Choose file"
//       accept="image/*,video/*"
//       onChange={onChange}
//       className={className}
//       primary
//       iconBefore
//       allowDuplicates
//     />
//   );

//   Input.propTypes = {
//     className: PropTypes.string,
//     onChange: PropTypes.func,
//   };




class CreateComment extends React.Component{

    constructor(props){
        super(props)

        this.send = this.send.bind(this)
    }
    // state = { value: '', fileName: '', toasts: [] };

    // handleChange = ({ name }, e) => {
    //     const { value } = e.target;
    //     const toasts = [
    //       ...this.state.toasts, {
    //         text: `${this.state.value === value ? 'The onChange event would not have been triggered again for' : 'Selected'} ${name}`,
    //       },
    //     ];
    //     this.setState({ value, fileName: name, toasts });
    //   };

    //   dismissToast = () => {
    //     this.setState(prevState => ({
    //       toasts: prevState.toasts.slice(1),
    //     }));
    //   };

    send = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios({
            method: 'post',
            url: `http://${window.host}/${this.props.type}/${this.props._id}/comments`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
            console.log(res.data);
            alert('Submited');
        })
    }
    render(){
        return[
            <div className={[styles.modalWindow, ((this.props.active13) ? styles.show2 : '')].join(' ')}>
                <div className={styles.BlackFilter}>
                </div>
                <div className={[styles.createComment, ((this.props.active13) ? styles.show3 : '')].join(' ')}>
                    <div className={styles.FilterImage}>
                        <div className={styles.Image}>
                            <h3> Оставьте свой отзыв </h3>
                            <img onClick={this.props.click} src={require('../../../../img/cancel-music.svg')} alt=""/>
                        </div>
                        <div className={styles.Filter}>
                        </div>
                    </div>
                    <div className={styles.Content}>
                        <div className={['container', styles.allInput].join(' ')}>
                            <p> Загрузите фотографию </p>
                            <div className={styles.input}>
                                <form onSubmit={this.send}>
                                    <input type="file" name="photo" />
                                    {/* <TextField
                                        id="duplicate-file-selection-field"
                                        placeholder="No file chosen"
                                        value={fileName}
                                        readOnly
                                        leftIcon={<Input onChange={this.handleChange} />}
                                    />
                                    <Snackbar id="duplicate-file-messages" toasts={toasts} onDismiss={this.dismissToast} /> */}
                                    <input name="name" placeholder='Имя*' type="text" />
                                    <input name="email" placeholder='E-mail*' type="text" />
                                    <textarea name="text" placeholder='Текст сообщения' />
                                    <div className={styles.but}>
                                        <button onClick={this.send} type="submit"> Оставить отзыв </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ];
    }

}

export default CreateComment;
