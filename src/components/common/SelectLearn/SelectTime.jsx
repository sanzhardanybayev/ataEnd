import React, {Component} from 'react';

import styles from './style.scss';

class SelectTime extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let choices = [];
        choices = this.props.choices.map((i)=>{
            return (
                <li
                    price={i.tickets[0].price}
                    onClick={this.props.ChekCity}
                    cityText={i.value}
                >
                    <a price={i.tickets[0].price} className={styles.chek} cityText={i.value}>
                        {i.value}
                    </a>
                </li>
            );
        });
        return(
            <div className={styles.Day}>
                <img onClick={this.props.change} src={this.props.icons} />
                <form className={styles.forms} action="">
                    <p className={styles.inputCity} onClick={this.props.change}> {this.props.time} </p>
                    <span onClick={this.props.change} type="text" className={styles.arrowInput}></span>
                </form>
                <div className = {[styles.Fall, ((this.props.active1) ? styles.show1 : '')].join(' ')}>
                    <ul className = {[styles.Fall123, ((this.props.active1) ? styles.show2 : '')].join(' ')}>
                        {/*<li>1</li>*/}
                        {/*<li>2</li>*/}
                        {/*<li>3</li>*/}
                        {/*<li>3</li>*/}
                        {
                            choices
                        }
                    </ul>
                </div>
                {/*<MuiThemeProvider>*/}

                {/*<SelectField*/}
                {/*className={styles.Select1}*/}
                {/*floatingLabelText="Выберите"*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.handleChange}*/}

                {/*>*/}
                {/*<MenuItem value={1} primaryText={[this.props.amount1,' ', this.props.text]} />*/}
                {/*<MenuItem value={2} primaryText={[this.props.amount2,' ', this.props.text]} />*/}
                {/*<MenuItem value={3} primaryText={[this.props.amount3,' ', this.props.text]} />*/}
                {/*<MenuItem value={4} primaryText={[this.props.amount4,' ', this.props.text]} />*/}
                {/*<MenuItem value={5} primaryText={[this.props.amount5,' ', this.props.text]} />*/}
                {/*</SelectField>*/}
                {/*</MuiThemeProvider>*/}
            </div>


        );
    }

}

export default SelectTime;

