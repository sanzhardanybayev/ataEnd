import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'google-maps-react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import styles from './style.css';

export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.saveToDB = this.saveToDB.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google)
            this.loadMap();
    }

    uploadImg() {
        const toastId = toast('Идет загрузка, пожалуйста подождите...', {
            autoClose: false,
            closeButton: false
        });
        const fileInput = document.querySelector('input[type=file]');
        const file = fileInput.files[0];
        const formData = new FormData();
        let self = this;
        formData.append('img', file);
        const image = axios({
            method: 'post',
            url: `http://${window.host}/upload`,
            headers: {
                'Content-Type': 'multipart/form-data',
                token: localStorage.getItem('token')
            },
            data: formData
        }).then(res => {
            console.log(res.data);
            const image = res.data.filename;
            self.state.data[self.state.data.length - 1].image = image;
            toast.update(toastId, {
                render: 'Маркер успешно сохранен',
                type: toast.TYPE.INFO,
                autoClose: 5000
            });
            return image;
        }).catch(err => {
            toast.update(toastId, {
                render: 'Произошла ошибка при загрузке картинки',
                type: toast.TYPE.ERROR,
                autoClose: 5000
            });
            return null;
        });
        return image;
    }

    saveToDB() {
        if(this.state.data.length == 0) {
            toast('Ошибка, не найдены маркеры на карте');
            return 0;
        }
        const id = this.props.id;
        const self = this;
        const toastId = toast('Идет сохранение, пожалуйста подождите...', {
            autoClose: false,
            closeButton: false
        });
        const image = axios({
            method: 'put',
            url: `http://${window.host}/tours/${id}`,
            headers: {
                token: localStorage.getItem('token')
            },
            data: this.state.data
        }).then(res => {
            console.log(res.data);
            toast.update(toastId, {
                render: "Успешно загружена",
                type: toast.TYPE.INFO,
                autoClose: 5000
            });
            return res.data;
        }).catch(res => {
            toast.update(toastId, {
                render: "Произошла ошибка при сохранении",
                type: toast.TYPE.ERROR,
                autoClose: 5000
            });
            return null;
        });
    }

    showForm() {
        const form = document.querySelector('.window');
        const blur = document.querySelector('.blur');
        form.style.display = "block";
        blur.style.display = "block";
    }

    closeForm() {
        const formWindow = document.querySelector('.window');
        const blur = document.querySelector('.blur');
        formWindow.style.display = 'none';
        blur.style.display = 'none';
        document.querySelector('.infoWindowForm').reset();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            const mapConfig = Object.assign({}, {
                center: {lat: 0, lng: 180},
                zoom: 2,
                gestureHandling: "cooperative",
                mapTypeId: 'roadmap'
            });
            this.map = new maps.Map(node, mapConfig);
            const map = this.map;
            let poly = new google.maps.Polyline({
              strokeColor: '#000000',
              strokeOpacity: 1.0,
              strokeWeight: 3
            });
            poly.setMap(this.map);
            let self = this;
            this.map.addListener('click', function(event) {
                if(self.state.data.filter(item => item.content === undefined).length > 0) {
                    toast.error("Заполните предыдущий маркер");
                    return 0;
                }
                let path = poly.getPath();
                path.push(event.latLng);

                self.state.data.push({
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                });
                const marker = new google.maps.Marker({
                  position: event.latLng,
                  title: 'Точка №' + path.getLength(),
                  map
                });
                marker.addListener('click', function(event) {
                    let marker = this;
                    const form = document.querySelector('.window');
                    if(self.state.data[self.state.data.length - 1].content) {
                        toast.error('Этот маркер уже заполнен');
                        return 0;
                    }
                    self.showForm();
                    const btn = form.querySelector('.btn');
                    btn.addEventListener('click', async (event) => {
                        console.log('here');
                        const title = form.querySelector('input[name="title"]').value;
                        const desc = form.querySelector('textarea').value;
                        if(!title || !desc) {
                            console.log(title);
                            toast.error('Данные не верны!');
                            return 0;
                        }
                        const filename = await self.uploadImg();
                        if(!filename) {
                            return 0;
                        }
                        self.closeForm();
                        const image = `http://${window.host}/${filename}`;
                        const content = `<div>
                                            <h3>${title}</h3>
                                            <p>${desc}</p>
                                        </div>`;
                        self.state.data[self.state.data.length - 1].content = content;

                        let infowindow = new google.maps.InfoWindow({
                          content
                        });
                        marker.addListener('mouseover', function(event) {
                          infowindow.open(map, this);
                          // event.stopPropagation();
                          event.stopImmediatePropagation();
                          event.preventDefault();
                        });
                        marker.addListener('mouseout', function(event) {
                          infowindow.close(map, this);
                          // event.stopPropagation();
                          event.stopImmediatePropagation();
                          event.preventDefault();
                        });
                       event.stopImmediatePropagation();
                       event.preventDefault();
                    });
                    event.stopImmediatePropagation();
                    event.preventDefault();
                });
            });
        }
    }

    render() {
        const style = {
            width: '100vw',
            height: '75vh'
        };
        return(
            <div>
                <div className="map">
                    <div ref="map" style={style}>
                        loading map...
                    </div>
                    <button className="btn btn-primary mb-2" onClick={this.saveToDB}>Сохранить</button>
                    <div className="blur"></div>
                    <div className="window">
                        <form action="#" className="infoWindowForm">
                            <div className="form-group">
                                <label htmlFor="title">Название</label>
                                <input name="title" type="text" className="form-control" placeholder="Введите Название" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Описание</label>
                                <textarea name="description" type="text"  className="form-control" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Выберите Картинку</label>
                                <input name="image" type="file" className="form-control-file" />
                            </div>
                            <input type="button" className="btn btn-primary mb-2" value="Сохранить"/>
                            <i className="fa fa-times-circle closeIcon" onClick={this.closeForm}></i>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}
