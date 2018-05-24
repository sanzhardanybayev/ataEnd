import React from 'react';

import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import styles from './style.scss';



const styless = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 160,
    },
});
// const items = [];
// for (let i = 0; i < 100; i++ ) {
//     items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
// }




class DayButton extends React.Component {
    constructor(props) {
        super(props);
        const duration = this.props.data;
        this.state = {
            age: 0,
            open: false
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.changeDuration(event.target.value);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;
        const select = this.props.data.map((duration, index) => {
            return (
                <MenuItem value={index}>{duration.value}</MenuItem>
            );
        });
        return (
            <div>
                <form autoComplete="off">
                        <InputLabel htmlFor="controlled-open-select"> Длительность Тура </InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'controlled-open-select',
                            }}
                        >
                            {select}
                        </Select>
                </form>
            </div>

        );
    }

}

export default withStyles(styless)(DayButton);
