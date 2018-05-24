import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import axios from 'axios/index';
import styles from './style.scss';
import City from '../../City/City';
import DateInput from './InputDate/InputDate';
import Person from '../../Person/Person';
import PriceForSearchPanel from '../priceForSerchPanel/PriceForSearchPanel';
import Book from '../../SearchSanatorium/BookIt/BookIt';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

const Transition = (props) => <Slide direction="up" {...props} />


class SearchSmallScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quantityPerson: 0,
            selectedDay: undefined,
            data: [],
            active1: false,
            names: []
        };
        this.getData = this.getData.bind(this);
        this.change = this.change.bind(this);
    }
    componentDidMount() {
        const path = this.props.type || this.props.condition.type;
        this.getData(path);
    }
    componentDidUpdate(prevProps) {
        if (prevProps != this.props && prevProps.condition.type != this.props.condition.type)
            this.getData(this.props.condition.type);
    }

    getData(path) {
        axios.get(`http://${window.host}/${path}`)
            .then((res) => {
                console.log(res.data.data);
                this.setState({
                    data: res.data.data
                });
            })
            .catch(err=>console.log(err));
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    }


    handleClose = () => {
        this.setState({ open: false })
    }
    change() {
        this.setState({
            active1: !this.state.active1
        });
        console.log('here');
    }
    render(){
        let typeProps;
        switch (window.location.pathname){
            case '/':
                typeProps = this.props.condition.type;
                break;
            default:
                typeProps = this.props.type;
        }

        let Books
        switch (typeProps) {
            case 'tours':
                Books = <Book price='50000' text= ' Забронировать Тур' click={this.handleClose}  background={('indo3.jpg')} />
                break
            case 'sanatoriums':
                Books = <Book price='50000' text= ' Забронировать Санаторию' click={this.handleClose} background={('123.jpg')} />
                break
            default:
                Books = <Book price='50000' text= ' Забронировать Тур' click={this.handleClose} background={('indo3.jpg')} />
        }

        let OrOr;
        let namePanel;
        switch (typeProps){
            case 'tours': {
                OrOr = <DateInput />
                namePanel = [
                    <div className={['col-12', styles.type].join(' ')}>
                        <img src={require(`../../../../img/icons/luggage.png`)} alt="" />
                        <p>ТУРЫ</p>
                    </div>
                ]
            }
                break;
            case 'sanatoriums':
                OrOr = <PriceForSearchPanel />
                namePanel = <div className={['col-12', styles.type].join(' ')}>
                                <img src={require(`../../../../img/house_card_yellow.png`)} alt="" />
                                <p>САНАТОРИИ</p>
                            </div>
                break;
            default:
                OrOr = <DateInput />
        }
        return[
            <div className={['d-flex d-xl-none', styles.SearchSmallScreenContainer].join(' ')}>
                <div className={styles.type}>
                    {
                     namePanel
                    }
                </div>
                <div className={styles.inputWidts}>
                    <City data={this.state.data} active1={this.state.active1} click={this.change} />
                    <DateInput/>
                    {OrOr}
                    <Person/>
                    <button onClick={this.handleClickOpen}>Забронировать</button>
                </div>
            </div>,
            <div>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    fullWidth={true}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    {/*<DialogTitle id="alert-dialog-slide-title" >*/}
                    {/*</DialogTitle >*/}
                    <DialogContent className={styles.Dialog}>
                        {Books}

                        {/*<SanatoriumsModal number={'Комфорт'}*/}
                        {/*active13={this.state.active13}*/}
                        {/*click={this.closeModal}*/}
                        {/*item={'Item'}*/}
                        {/*product={'product'}*/}
                        {/*price={'2000'}*/}
                        {/*image3={('mal.jpg')}/>*/}
                        {/*<DialogContentText id="alert-dialog-slide-description" >*/}
                        {/*<SanatoriumsModal number={'Комфорт'}*/}
                        {/*active13={this.state.active13}*/}
                        {/*click={this.closeModal}*/}
                        {/*item={'Item'}*/}
                        {/*product={'product'}*/}
                        {/*price={'2000'}*/}
                        {/*image3={('mal.jpg')}/>*/}
                        {/*</DialogContentText >*/}
                    </DialogContent >
                    {/*<DialogActions >*/}
                    {/*<Button onClick={this.handleClose} color="primary" >*/}
                    {/*Disagree*/}
                    {/*</Button >*/}
                    {/*<Button onClick={this.handleClose} color="primary" >*/}
                    {/*Agree*/}
                    {/*</Button >*/}
                    {/*</DialogActions >*/}
                </Dialog >
            </div>
        ];
    }
}


SearchSmallScreen.propTypes = {
    condition: PropTypes.object
};
const mapStateToProps = (state) => {
    return {
        condition: state.typeContant
    };
};

export default connect(mapStateToProps)(SearchSmallScreen);
