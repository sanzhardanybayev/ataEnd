import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterChanged } from '../../../actions/filterActions';

class StarsWithBorder extends React.Component {
    constructor(props) {
        super(props);
        this._onRate = this._onRate.bind(this);
    }

    _onRate(event) {
        console.log('here')
        if (event.type === 'click')
            this.props.filterChanged({ rating: event.rating });
    }

    render() {
        return (
            <Rater
                onRate={this._onRate}
                total={5}
                rating={5}
            />

        );
    }
}
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filterChanged
    }, dispatch);
};

export default connect(null, matchDispatchToProps)(StarsWithBorder);
