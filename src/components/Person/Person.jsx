import React from 'react';
import styles from './styles.scss';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // quantityPerson: 1
        };
        // this.morePerson = this.morePerson.bind(this);
        // this.lessPerson = this.lessPerson.bind(this);
    }
    // morePerson(){
    //     this.setState(prevState => ({
    //         quantityPerson: prevState.quantityPerson + 1
    //     }));
    // }
    // lessPerson(){
    //     if(this.state.quantityPerson != 0) {
    //         this.setState(prevState => ({
    //             quantityPerson: prevState.quantityPerson - 1
    //         }));
    //     }
    // }

    render(){
        return(
                <div className={styles.person}>
                    <span className={styles.top}  onClick={this.props.morePerson}></span>
                    {this.props.quantityPerson} кол. человек
                    <span className={styles.bottom} onClick={this.props.lessPerson}></span>
                </div>
        )
    }
}

export default Person;
