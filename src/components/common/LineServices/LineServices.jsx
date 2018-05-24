import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './style.scss';
import 'animate.css'

class LineServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

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

            <div  className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.services].join(' ')} >
                <ul ref='bottomNavigation'>
                    <li className={styles.margin} onClick={this.props.click}> <AnchorLink offset='-400' href='#one'> Наши номера</AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li> <AnchorLink offset='-400' href='#two'>Медицинские услуги</AnchorLink>
                        <span className={styles.after}> </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li><AnchorLink offset='-400' href='#three'>Трансфер</AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li> <AnchorLink offset='-400' href='#Gallery'>Отзывы</AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                    <li> <AnchorLink offset='-400' href='#About'>О нас</AnchorLink>
                        <span className={styles.after}>  </span>
                        <span className={styles.before}>  </span>
                    </li>
                </ul>
            </div>


        );
    }

}

export default LineServices;

