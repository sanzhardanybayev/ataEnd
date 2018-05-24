import React from 'react';
import styles from './style.scss';



class SortingSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: 'по умолчанию'
        };
        this.ChekCity = this.ChekCity.bind(this);
        this.change = this.change.bind(this);

    }
    change() {
        this.setState({
            active: !this.state.active
        });
    }
    ChekCity(e){
        var inp = document.getElementsByClassName(styles.inputCity);
        var text = e.target.getAttribute('cityText');
        this.setState(prevState => ({
            city: prevState.city = text }));

    }





    render(){


        return(
            <div className={styles.Select}>
                <div className={styles.sorting}>
                    <p> Сортировка </p>
                </div>
                <div className={styles.Day}>
                    {/*<img src={this.props.icons} />*/}
                    <form action="">
                        <span onClick={this.change} type="text" className={styles.inputCity}>{this.state.city}</span>
                    </form>

                    <span onClick={this.change} type="text" className={styles.arrowInput}> </span>
                    <div className = {[styles.Fall, ((this.state.active) ? styles.show1 : '')].join(' ')}>
                        <ul className = {[styles.ul, ((this.state.active) ? styles.show2 : '')].join(' ')}>
                            <li onClick={this.change}><a className={styles.chek} onClick={this.ChekCity}  cityText=" Цене" >  Цене  </a></li>
                            <li onClick={this.change}><a className={styles.chek} onClick={this.ChekCity}  cityText=" Качеству" >  Качеству  </a></li>
                            <li className={styles.bottom} onClick={this.change}><a className={styles.chek} onClick={this.ChekCity}  cityText=" Обслуживанию" >  Обслуживанию  </a></li>
                        </ul>
                    </div>
                </div>
            </div>



        );
    }

}

export default SortingSelect;

