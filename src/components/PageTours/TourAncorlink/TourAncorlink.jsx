import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './style.scss';
import 'animate.css';


class TourAncorlink extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        const element = this.refs.bottomNavigation
        const elementRect = element.getBoundingClientRect()
        const elementOffsetTop = elementRect.top + elementRect.height
        const fixedStyle = styles.fixed
        let belowNav = false
        console.log(fixedStyle)

        window.addEventListener('scroll', (event) => {
            let currentScrollPosition = window.scrollY 
            console.log(currentScrollPosition)
            console.log(elementRect.top)
            if(!belowNav && currentScrollPosition >= elementOffsetTop){
                element.classList.toggle(fixedStyle)

                if(element.classList.contains('slideInUp'))
                    element.classList.toggle('slideInUp')
       
                element.classList.toggle('slideInDown')
                belowNav = true
            } else if( belowNav && currentScrollPosition <  elementOffsetTop){
                element.classList.toggle(fixedStyle)
                element.classList.toggle('slideInDown')
                element.classList.toggle('slideInUp')
       
                belowNav = false
            }
                
        })
    }



    render() {


        return(
            <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.services].join(' ')} >
                <ul ref='bottomNavigation'>
                    <li className={styles.margin} onClick={this.props.click}> <AnchorLink offset='-400' href='#one'> Билет </AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li> <AnchorLink offset='-400' href='#two'> Маршрут следования </AnchorLink>
                        <span className={styles.after}> </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li><AnchorLink offset='-950' href='#history'>История</AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li> <AnchorLink offset='-400' href='#comment'>Отзывы</AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                </ul>
            </div>

        );
    }

}

export default TourAncorlink;

