import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap-grid.css'
import styles from './style.scss'
import Owl from '../common/Owl/Owl'
import Souvenir from '../common/Souvenir/Souvenir'
import News from '../common/News/News'
import GalleryReviews from '../GalleryReviews/GalleryReviews'
import Footer from '../Footer/Footer'
import Header1 from '../common/Header1/Header1'
import FirstText from './FirstText/FirstText'
import CommentSlider from '../common/CommentSlider/CommentSlider'
import CreateComment from './CreateComment/CreateComment'


class FirstPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      souveniers: [],
      active13: false,
      comments: []
    }
    this.changed = this.changed.bind(this)
  }

  changed() {
    this.setState({
      active13: !this.state.active13
    })
  }

  componentDidMount() {
    const souvenierURL = `http://${window.host}/souveniers?page=1&limit=4`,
          commmentsURL = `http://${window.host}/comments`,
          self         = this
    axios.get(souvenierURL)
      .then((res) => {
        self.setState({
          souveniers: res.data.data.data
        })
      }).catch((err) => {
      console.log(err)
    })
    axios.get(commmentsURL)
      .then((res) => {
        console.log(res.data.data)
        self.setState({
          comments: res.data.data
        })
      }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const souveniers = this.state.souveniers.map((item, index) => {
      return (
        <Souvenir
          key={index}
          image={item.image}
          choiceses={[]}
          rating={item.rating}
          text={item.shortDescription}
          product={item.name}
          price={item.price}
          description={item.description}
        />
      )
    })
    return (
      <div className={styles.FirstPage} >
        <Header1 />
        <section className={['container', styles.section].join(' ')} >
          <div className={['row', styles.row].join(' ')} >
            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.Info].join(' ')} >
              <h1 > Наши услуги </h1 >
              <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.turistService].join(' ')} >
                <div id="owl" className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.Owl].join(' ')} >
                  <Owl icon={require('../../../img/fire_card.png')}
                       title="Лечебно-оздоровительный туризм"
                       text="Лечебно оздоровительный туризм предусматривает перемещение резидентов и нерезидентов в пределах государственных границ и за пределы государственных границ на срок не менее 20 ч и не более 6 мес. в оздоровительных целях"
                       image="20170513170908.jpg" />
                  <Owl icon={require('../../../img/fire_card.png')}
                       title="Горячие туры Южного Казахстана"
                       text="Климат Южного Казахстана – мягкий, весьма хорош для отдыха, лечения, занятия альпинизмом, горнолыжным спортом, охотой."
                       image="thumb_pd61.jpg" />

                </div >
                <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.Service].join(' ')} >
                  <h6 > Многообразие туристических услуг </h6 >
                  <p > Мы предлагаем самые разнообразные услуги высочайшего качества, которое не только полностью
                    соответствует Вашим ожиданиям, но также предвидят Ваши будущие желания! </p >
                  <div className={styles.BorderRadius} >
                    <FirstText name='Организация выездного туризма: групповые и индивидуальные туры' />
                    <FirstText name='Организация въездного и внутреннего туризма' />
                    <FirstText name='Оказание визовой поддержки и регистрация для иностранных граждан' />
                    <FirstText name='Продажа и бронирование авиабилетов ' />
                    <FirstText name='Бронирование отелей' />
                    <FirstText name='Организация деловых поездок (бизнес - туры, конференций, семинары, выставки)' />
                    <FirstText name='Спортивный туризм' />
                    <FirstText name='MICE туризм' />
                    <FirstText name='VIP - обслуживание' />
                    <FirstText name='Корпоративное обслуживание' />


                  </div >


                </div >

              </div >
              <div id="anchor" className={styles.anchor} />
              <h1 id={styles.titles} > ПОЧЕМУ ИМЕННО МЫ? </h1 >
              <div className="container" >
                <div className={['row', styles.quality].join(' ')} >
                  <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.what].join(' ')} >
                    <h2 className="col-2" >1 </h2 >
                    <div className={['col-10', styles.color].join(' ')} >
                      <h6 > Качество обслуживания </h6 >
                      <p > Предлагаем отели с высокой репутацией и лучшими отзывами. </p >
                    </div >
                  </div >
                  <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.what].join(' ')} >
                    <h2 className="col-2" > 2 </h2 >
                    <div className={['col-10', styles.color].join(' ')} >
                      <h6 > ПОДДЕРЖКА 24/7</h6 >
                      <p >Наши турагенты готовы помочь вам во время поездки.</p >
                    </div >
                  </div >
                  <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.what].join(' ')} >
                    <h2 className={'col-2'} > 3 </h2 >
                    <div className={['col-10', styles.color].join(' ')} >
                      <h6 > ПРОГРАММЫ ДЛЯ ДЕТЕЙ</h6 >
                      <p > Выбор концепции детского отдыха теперь становится делом не столько географического, сколько
                        тематического порядка. </p >
                    </div >
                  </div >
                  <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.what].join(' ')} >
                    <h2 className="col-2" > 4 </h2 >
                    <div className={['col-10', styles.color].join(' ')} >
                      <h6 > ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</h6 >
                      <p > Первоклассный комфорт по доступной цене. </p >
                    </div >
                  </div >
                  <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.what].join(' ')} >
                    <h2 className="col-2" > 5 </h2 >
                    <div className={['col-10', styles.color].join(' ')} >
                      <h6 > ИНТЕРЕСНЫЕ ТУРЫ</h6 >
                      <p > Выбрав экскурсионные туры, Вы получите интересный, насыщенный и комфортный отдых в наших
                        краях </p >
                    </div >
                  </div >
                  <div className={['col-lg-4 col-md-4 col-sm-12 hidden-md-down row', styles.what].join(' ')} >
                    <h2 className="col-2" > 6 </h2 >
                    <div className={['col-10', styles.color].join(' ')} >
                      <h6 > УСЛУГА ДЛЯ ИНТУРИСТОВ </h6 >
                      <p > Мы предлагаем путешествия по системе «все включено» а также индивидуальные туры </p >
                    </div >
                  </div >
                </div >
              </div >
              <div className="container" >
                <div className={['row', styles.Souvenirs].join(' ')} >
                  <h1 > Сувениры </h1 >
                  <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.surprice].join(' ')} >
                    {souveniers}
                  </div >
                  <div className={styles.over} >
                    <a href="/souveniers " >Перейти в раздел сувениры <span /> </a >
                  </div >
                </div >
              </div >
              <div >
                <div className={['row', styles.Souvenirs].join(' ')} >
                  <h1 > Новости </h1 >
                  <div className={['row', styles.new].join(' ')} >
                    <News image="Rixos.jpg"
                          title="Областная выставка мастеров рукоделия и прикладного искусства «Оңтүстік көркі – Красота Юга»"
                          text="Продвижение туристского потенциала региона, поддержка мастеров прикладного искусства."
                          data="апрель, г.Шымкент" />
                    <News image="gelen.png"
                          title="Проведение областного соревнования по рафтингу «Арысь» на призы акима Южно-Казахстанской области и на Кубок газеты «Южный Казахстан»"
                          text="Спортивно-туристское и массовое мероприятие" data="апрель, г.Шымкент" />
                    <News image="Turkestan8.jpg" title="Туристская ярмарка «Керуен сарай»"
                          text="Ярмарка продвигает туристический потенциал региона и знакомит гостей с возможностями в этой сфере."
                          data="апрель, г.Шымкент" />
                  </div >
                </div >
              </div >
            </div >
          </div >
        </section >
        <div className={'container'} >
          {/*Это коммент слайдер*/}
           <GalleryReviews comments={this.state.comments}/>
        </div >

        <Footer />
      </div >
    )
  }
}

export default FirstPage

