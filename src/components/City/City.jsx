import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import styles from './styles.scss';


class City extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active1: false,
            city: '',
            currentId: ''
        };
        this.ChekCity = this.ChekCity.bind(this);
    }

    componentDidMount() {
        this.update();
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.data != prevProps.data)
            this.update();
    }
    update = () => {
        if (this.props.data.length) {
            const data = this.props.data[0];
            this.setState({
                city: data.name,
                currentId: 0
            }, () => {
                console.log(this.state.city);
            });
        } 
    }
    ChekCity(e){
        let inp = document.getElementsByClassName(styles.inputCity)[0];
        const currentId = e.target.getAttribute('itemId');
        this.setState({
          city: e.target.getAttribute('cityText'),
          currentId
        });
        this.props.activeItemChange(currentId);
    }

    render() {
        if (!this.props.data.length) {
            return null;
        }
        const list = this.props.data.map((item, index) => {
           return (
               <li className={styles.chek} onClick={this.ChekCity} itemId={index} cityText={item.name}>{item.name}</li>
           );
        });
        return (
            <div onClick={this.props.click}  className={[styles.city, ((this.props.active1) ? styles.show1 : '')].join(' ')} >
                <form action="#">
                    <input type="text"  className={styles.inputCity} value={this.state.city} readOnly/>
                </form>
                <div id='dropdown' className={[styles.Fall, ((this.props.active1) ? styles.show2 : '')].join(' ')} >
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default City
