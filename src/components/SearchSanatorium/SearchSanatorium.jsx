import React from 'react'
import { connect } from 'react-redux'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import axios from 'axios'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import City from '../City/City'
import DatePick from '../DatePick/DatePick'
import Person from '../Person/Person'
import PriceForSearchPanel from '../common/priceForSerchPanel/PriceForSearchPanel'
import LinkPage from '../common/LinkPage/LinkPage'
import Book from './BookIt/BookIt'

const Transition = (props) => <Slide direction="up" {...props} />


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityPerson: 0,
      selectedDay: undefined,
      data: [],
      active1: false,
      names: [],
      active13: false,
      open: false,
      loading: true,
      quantityPerson: 1,
      activeItemId: 0
    }
    this.getData = this.getData.bind(this)
    this.change = this.change.bind(this)
    this.morePerson = this.morePerson.bind(this);
    this.lessPerson = this.lessPerson.bind(this);
  }

  change() {
    this.setState({
      active1: !this.state.active1
    })
    console.log('here')
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleActiveItemChange = (activeItemId) => {
    console.warn(activeItemId)
    this.setState({
      activeItemId
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  closeModal() {
    this.setState({
      active13: false
    })
  }
  morePerson(){
    this.setState(prevState => ({
        quantityPerson: prevState.quantityPerson + 1
    }));
  }
  lessPerson(){
    if(this.state.quantityPerson != 0) {
        this.setState(prevState => ({
            quantityPerson: prevState.quantityPerson - 1
        }));
    }
  }

  componentDidMount() {
    const path = this.props.type || this.props.condition.type
    this.getData(path)
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props && prevProps.condition.type != this.props.condition.type)
      this.getData(this.props.condition.type)
  }

  getData(path) {
    axios.get(`http://${window.host}/${path}`)
      .then((res) => {
        console.log("The data is here");
        console.log(res.data.data)
        this.setState({
          data: res.data.data,
          activeItemId: 0,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.loading) {
      return (<div />)
    }
    const { minPrice } = this.state.data[this.state.activeItemId];

    let typeProps = (this.props.activeService == 1) ? 'tours' : 'sanatoriums'
    console.log(`The id is ${this.props.activeService}`)
    let Books

    switch (typeProps) {

      case 'tours':
        Books =
          <Book quantityPerson={this.state.quantityPerson}  data={this.state.data[this.state.activeItemId]} type='tours' text=' Забронировать Тур'
                click={this.handleClose} background={('indo3.jpg')} />
        break
      default:
        Books = <Book quantityPerson={this.state.quantityPerson}  data={this.state.data[this.state.activeItemId]} price={minPrice} type='sanatoria'
                      text=' Забронировать Санаторию' click={this.handleClose} background={('123.jpg')} />
    }
    let ArAr
    switch (typeProps) {
      case 'tours':
        ArAr = <LinkPage link={('/tours')} text='Посмотреть все туры' />
        break
      case 'sanatoriums':
        ArAr = <LinkPage link={('/sanatoriums')} text='Посмотреть все санатории' />
        break
      default:
        ArAr = <LinkPage link={('/tours')} text='Посмотреть все туры' />
    }
    let OrOr
    switch (typeProps) {
      case 'tours':
        OrOr = <PriceForSearchPanel price={minPrice} />
        break
      case 'sanatoriums':
        OrOr = <DatePick />
        break
      default:
        OrOr = <PriceForSearchPanel price={minPrice} />
    }

    // let Links;
    // // switch (typeProps){
    // //     case 'tours':
    // //         Links = <Link to={'/tours'} className={styles.showMore}> Посмотреть все туры <img src={require('../../../img/icons/arrow_grey_right.png')} /> </Link>
    // //         break;
    // //     case 'sanatoriums':
    // //         Links = <Link to={'/tours'} className={styles.showMore}> Посмотреть все санатории <img src={require('../../../img/icons/arrow_grey_right.png')} /> </Link>
    // //         break;
    // //     default:
    // //         Links = <Link to={'/tours'} className={styles.showMore}> Посмотреть все туры <img src={require('../../../img/icons/arrow_grey_right.png')} /> </Link>
    // // }
    return [
      <div className={[styles.Search, 'd-none d-xl-flex', ((this.state.active1) ? styles.show : '')].join(' ')} >
        <City
          data={this.state.data}
          active1={this.state.active1}
          click={this.change}
          activeItemChange={this.handleActiveItemChange}
        />
        <DatePick />
        {OrOr}
        <Person quantityPerson={this.state.quantityPerson} lessPerson={this.lessPerson} morePerson={this.morePerson} />
        <button onClick={this.handleClickOpen} >Забронировать</button >
      </div >,
      <div className={styles.allServices} >
        {ArAr}
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
          <DialogContent className={styles.Dialog} >
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
      </div >
      // {Links}

    ]
  }
}


Search.propTypes = {
  condition: PropTypes.object,
  activeService: PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
  return {
    condition: state.typeContant
  }
}

export default connect(mapStateToProps)(Search)
