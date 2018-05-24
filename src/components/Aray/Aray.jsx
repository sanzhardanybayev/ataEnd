import React from 'react';

import styles from './style.scss';
import Pagination from '../common/PaginationComponent/PaginationComponent';
import Search from '../SearchSanatorium/SearchSanatorium';
import FilterContainer from '../common/FilterContaner/FilterContainer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchSmallScreen from '../common/SearchSmallScreen/SearchSmallScreen';

class Aray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Header background="sanatori.jpg" miniTitle="Санатории" title="Санатории Южного Казахстана" text="Искренне веруй и люби учиться, храни до смерти свои убеждения и совершенствуй свой путь." />
                <section className={['container', styles.section1].join(' ')}>
                    <div className={['row', styles.row].join(' ')}>
                        <Search type={'sanatoriums'}/>
                        <SearchSmallScreen type={'sanatoriums'}/>
                        <div className={['col-lg-12 col-md-12 col-sm-12 row', styles.infoContainer].join(' ')} >
                            <div className={['col-lg-3 col-md-12 col-sm-12 ', styles.Filter].join(' ')} >
                                <FilterContainer type="Санаториев" />
                            </div>
                            <div className={['col-lg-9 col-md-12 col-sm-12 ', styles.infoContainer2].join(' ')} >
                                 {/*<div className={['col-lg-12 col-md-12 col-sm-12 ', styles.Select].join(' ')} >*/}
                                 {/*<SortingSelect />*/}
                                 {/*</div>*/}
                                <div className={['col-lg-12 col-md-12 col-sm-12 hidden-md-down row', styles.All].join(' ')} />
                                <div className={['row', styles.Info].join(' ')} >
                                    <Pagination type="sanatoriums" />
                                    {/*<div className={['container', styles.infoContainer1].join(' ')} >*/}
                                        {/**/}
                                    {/*</div>*/}
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

export default Aray;
