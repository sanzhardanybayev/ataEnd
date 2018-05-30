import React from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'
import styles from './stylesPagination.scss'
import CommentList from './ComentList'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      page: 1,
      pageAmount: 0,
      loaded: false
    }
    this.handlePageClick = this.handlePageClick.bind(this)
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this)
  }

  componentWillMount() {
    this.loadCommentsFromServer()
  }

  componentDidUpdate(prevProps) {
    if (this.props != prevProps)
      this.loadCommentsFromServer()
  }

  loadCommentsFromServer() {
    this.setState({
      loaded: true
    })
    const { page }                = this.state,
          { type }                = this.props,
          { price, rating, boon } = this.props.filter,
          boonQuery               = boon.length > 0 ? ('&boon=' + boon.join(',')) : ''
    const self = this
    let url
    if (type === 'souveniers') {
      url = `http://${window.host}/${type}`
    } else {
      // url = `http://${window.host}/${type}?page=${page}&limit=6&price=${price}&rating=${rating}${boonQuery}`
      url = `http://${window.host}/${type}?page=${page}&limit=6&rating=${rating}${boonQuery}`
    }

    axios.get(url)
      .then(res => {
        if (self.state.page === 1) {
          self.setState({
            data: res.data.data.data,
            pageAmount: Math.ceil(res.data.data.size / 6),
            loaded: true
          })
        } else {
          self.setState({ data: res.data.data })
        }
      })
      .catch(err => console.log(err))
  }

  handlePageClick(data) {
    if (this.page !== data.selected + 1) {
      this.setState({
        page: data.selected + 1
      }, () => {
        this.loadCommentsFromServer()
      })
    }
  }

  render() {
    let paginate
    if (!this.state.loaded) {
      paginate = (
        <div >
          <CircularProgress size={120} thickness={5} />
        </div >
      )
    }
    else if (this.state.pageAmount) {
      paginate = (
        <ReactPaginate
          previousLabel={(<img src={require(`../../../../img/icons/arrow_grey_left.png`)} alt="" />)}
          nextLabel={(<img src={require(`../../../../img/icons/arrow_grey_right.png`)} alt="" />)}
          breakLabel={<span >...</span >}
          breakClassName={styles.breack}
          pageCount={this.state.pageAmount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName={styles.pagination}
          subContainerClassName="pages pagination"
          activeClassName={styles.active}
        />)
    } else {
      paginate = (
        <div >
          По Вашему запросу ничего не найдено.
        </div >
      )
    }

    const pagination = (this.props.type !== 'souveniers') ? <div className={styles.preLoader} >
      {
        paginate
      }
    </div > : ''

    return (
      <div className={styles.PaginationContent} >
        <CommentList data={this.state.data} type={this.props.type} />
        { pagination }
      </div >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps)(App)
