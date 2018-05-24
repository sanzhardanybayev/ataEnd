import React from 'react';

import styles from './style.scss';

class SelectQuantity extends React.Component{
    componentDidMount(){
        console.log(this.props.choicasdes);
    }
    render(){
        let choices = [];
        choices = this.props.choicasdes.map((i)=>{
            return <li price={i.price} onClick={this.props.ChekCity} citytext={i.name}><a price={i.price} className={styles.chek} cityText={i.name}>{i.name}</a></li>
        });
        return(
            <div className={styles.Day}>
                <img onClick={this.props.change} src={this.props.icons} />
                <div className={styles.counter}>
                    <p> {this.props.counter} </p>
                    <div className={styles.spanPlus}>
                        <span className={styles.plus} onClick={this.props.plus}></span>
                        <span className={styles.minus} onClick={this.props.minus}></span>
                    </div>

                </div>


                {/*<form className={styles.forms} action="">*/}
                    {/*<p className={styles.inputCity} onClick={this.props.change}> {this.props.quantity}</p>*/}
                    {/*<span onClick={this.props.change} type="text" className={styles.arrowInput}></span>*/}
                {/*</form>*/}
                {/*<div className = {[styles.Fall, ((this.props.active1) ? styles.show1 : '')].join(' ')}>*/}
                    {/*<ul className = {[styles.Fall123, ((this.props.active1) ? styles.show2 : '')].join(' ')}>*/}
                        {/*{*/}
                            {/*choices*/}
                        {/*}*/}
                    {/*</ul>*/}
                {/*</div>*/}
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

export default SelectQuantity;

