import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { filterChanged } from '../../../actions/filterActions';

import styles from './selectorStyles.scss';

import Summer from '../../../SVG/Summer';
import Winter from '../../../SVG/Winter';
import Religion from '../../../SVG/Religion';
import Tent from '../../../SVG/Tent';
import Riffle from '../../../SVG/Riffle';
import Food from '../../../SVG/Food';
import Discount from '../../../SVG/Discount';

import SwimmingPool from '../../../SVG/SwimmingPool';
import Wifi from '../../../SVG/Wifi';
import Spa from '../../../SVG/Spa';
import Kids from '../../../SVG/Kids';
import Transfer from '../../../SVG/Transfer';

class SelectContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            included: false
        };
        this.change = this.change.bind(this);
    }
    change() {
        const boon = this.props.filter.boon;
        this.setState({
            active: !this.state.active
        });
        const index = boon.indexOf(this.props.type);
        let value = [];
        if (index >= 0) {
            value = boon.filter(item => item !== this.props.type);
        } else {
            value = [...boon, this.props.type];
        }
        this.props.filterChanged({ boon: value });
    }

    render() {
        const svg = () => {
            switch (this.props.type) {
            case "summer":
                return <Summer />;
            case 'winter':
                return <Winter />;
            case 'religion':
                return <Religion />;
            case 'tent':
                return <Tent />;
            case 'riffle':
                return <Riffle />;
            case 'food':
                return <Food />;
            case 'discount':
                return <Discount />;
            case 'swimmingPool':
                return <SwimmingPool />;
            case 'wifi':
                return <Wifi />;
            case 'spa':
                return <Spa />;
            case 'kids':
                return <Kids />;
            case 'transfer':
                return <Transfer />;
            default:
                return null;
            }
        };
        if (this.props.static) {
            return (
                svg()
            );
        }
        return (
            <button onClick={this.change} className={['col-3 px-1 my-1 text-center', styles.Selecter, ((this.state.active) ? styles.active : '')].join(' ')}>
                { svg() }
                <p className="col-12 px-0 mb-0">{this.props.text}</p>
            </button>
        );
    }
}

SelectContent.propTypes = {
    filter: PropTypes.object
};


const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filterChanged
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SelectContent);

