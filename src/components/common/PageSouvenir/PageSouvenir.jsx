import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from './style.scss';
// import Search from "../../SearchSanatorium/SearchSanatorium";
import Pagination from '../PaginationComponent/PaginationComponent';
import FilterContainer from '../../common/FilterContaner/FilterContainer';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


class PageSouvenir extends React.Component{
    render(){
        return(
            <div>
                <Header background = {('souvenir.jpg')} miniTitle='Сувениры' title='Сувениры' text='Искренне веруй и люби учиться, храни до смерти свои убеждения и совершенствуй свой путь.' />
                <section className={['container', styles.section1].join(' ')}>
                    <div className={['row', styles.row].join(' ')}>
                        <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.infoContainer].join(' ')} >
                            <div className={['col-lg-3 col-md-12 col-sm-12 hidden-md-down', styles.Filter].join(' ')} >
                                <FilterContainer />
                            </div>
                            <div className={['col-lg-9 col-md-12 col-sm-12 hidden-md-down', styles.infoContainer1].join(' ')} >
                                {/*<div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Select].join(' ')} >*/}
                                    {/*<SortingSelect />*/}
                                {/*</div>*/}
                                <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down', styles.Info].join(' ')} >
                                    <div className={['container', styles.infoContainer1].join(' ')} >
                                        <div className={['row', styles.Info1].join(' ')} >
                                            <Pagination type="souveniers"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

}

export default PageSouvenir;
