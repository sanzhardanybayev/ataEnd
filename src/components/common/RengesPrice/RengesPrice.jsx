import React from 'react';
import Slider from 'react-rangeslider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterChanged } from '../../../actions/filterActions';
import './styles.css';

class VolumeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 100
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnChangeComplete = this.handleOnChangeComplete.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            volume: value
        });
    }
    handleOnChangeComplete() {
        this.props.filterChanged({ price: this.state.volume });
    }

    render() {
        const { volume } = this.state;
        return (
            <Slider
                min={this.props.min}
                max={this.props.max}
                value={volume}
                onChange={this.handleOnChange}
                onChangeComplete={this.handleOnChangeComplete}
            />
        );
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filterChanged
    }, dispatch);
};

export default connect(null, matchDispatchToProps)(VolumeSlider);
