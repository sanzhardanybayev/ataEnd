import React from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Confetti.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeContent } from '../../../actions/TypeContentActions'

import styles from './style.scss'

import Navigation from '../../Navigation/Navigation'
import Search from '../../SearchSanatorium/SearchSanatorium'

import NavigationSmallScreen from '../NavigationSmallSreen/NavigationSmallScreen'
import SearchSmallScreen from '../SearchSmallScreen/SearchSmallScreen'
import LinkPage from '../LinkPage/LinkPage'


class Header1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeService: 1,
        active: false
    }
    this.switchActiveService = this.switchActiveService.bind(this);
    this.background = this.background.bind(this);
  }

    background() {
        this.setState({
            active: !this.state.active
        })
    }
  /*
    Переключает выбранную услугу при клике
    0 - Туры
    1 - Санатории
  */
  switchActiveService(event) {
    event.preventDefault()
    event.stopPropagation()
    if (event.target !== this) {
      const index = event.target.getAttribute('service_id')
      if (this.state.activeService !== index) {
        this.setState({
          activeService: Number.parseInt(index)
        })
      }
    }
    this.background();

  }


  render() {
    return (
      <section className={styles.sectionHeader} >
        <div className={[(this.state.active) ? styles.show : '', styles.Header, 'pb-4'].join(' ')} >
          <div className={styles.Filter} />
          <Navigation />
          <NavigationSmallScreen />
          <div className={[styles.text, 'container'].join(' ')} >
            <h6 > ARAY TRAVEL AGENCY </h6 >
            <h2 > НАСЛАЖДАЙТЕСЬ ЖИЗНЬЮ ВМЕСТЕ С НАМИ </h2 >
            <p > На нашем сайте вы найдёте огромное многообразие туристических услуг по всем направлениям. Мы поможем
              вам подобрать путевку
              <div style={{ display: 'inline-block' }} >
                <p
                  id="sd"
                  className={['btn-xs header_sign_up_link surprise-hover at-element-marker', styles.charged].join(' ')}
                  data-aa-title="nav-signup-cta"
                  style={{ animation: 'none' }}
                >мечты
                </p >
              </div >, которая удовлетворит
              все ваши желания.
            </p >
          </div >
          <div className={styles.icons1} >
            <div type="tours" service_id={'1'} onClick={this.switchActiveService}
                 className={[styles.icons, (this.state.activeService === 1) ? styles.lightUp : ''].join(' ')} >
              <img
                type="tours"
                className={styles.white}
                src={require('../../../../img/icons/luggageWhite.svg')}
                alt=""
              />
              <img
                  type="tours" className={styles.red} src={require('../../../../img/icons/luggage.svg')} alt="" />
              <a >ТУРЫ
                <span type="tours" className={styles.after} />
                <span type="tours" className={styles.before} />
              </a >
            </div >
            <div type="sanatoriums" service_id={'2'} onClick={this.switchActiveService}
                 className={[styles.icons, (this.state.activeService === 2) ? styles.lightUp : ''].join(' ')} >
              <img
                type="sanatoriums"
                id={styles.house1}
                className={styles.white}
                src={require('../../../../img/icons/houseWhite.svg')}
                alt=""
              />
              <img
                type="sanatoriums"
                id={styles.house1}
                className={styles.red}
                src={require('../../../../img/icons/house.svg')}
                alt=""
              />

              <a type="sanatoriums" >САНАТОРИИ
                <span type="sanatoriums" className={styles.after} />
                <span type="sanatoriums" className={styles.before} />
              </a >
            </div >
          </div >
        </div >
        <div className={styles.Search} >
          <Search activeService={this.state.activeService} />
          <SearchSmallScreen />
          <section >
          </section >
          <AnchorLink offset="-200" className={styles.goDown} href="#anchor" > <img
            className={styles.imageAnimate}
            src={require('../../../../img/icons/right-arrows-couple.png')}
          />
          </AnchorLink >
        </div >

      </section >

    )
  }

}

const mapStateToProps = (state) => {
  return {
    typeContant: state.typeContant
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeContent
  }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Header1)

