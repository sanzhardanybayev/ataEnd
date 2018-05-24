import React from 'react';
import styles from './styles.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

class DatePick extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: undefined,
        };
    }
    handleDateChange = (selectedDay) => {
        this.setState({
            selectedDay
        });
        this.props.onDateChange(formatDate(selectedDay, 'L', 'RU'));
    }
    render(){
        return(
            <div className={styles.dateInputConainer}>
                <DayPickerInput
                    onDayChange={this.handleDateChange}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    format="L"
                    placeholder={`${formatDate(new Date(), 'L', 'RU')}`}
                    dayPickerProps={{
                        locale: 'RU',
                        localeUtils: MomentLocaleUtils,
                    }}
                />
            </div>
        );
    }
}
export default DatePick;



    // handleDayChange(day) {
    //     console.log(day);
    //     let datePicker = document.querySelector('.DayPickerInput-OverlayWrapper');
    //     if(window.outerWidth < 450) {
    //         datePicker.style.marginRight = '100px !important';
    //         datePicker.style.position = 'absolute !important';
    //         datePicker.style.Right = '100px !important';
    //         datePicker.style.left = '100px !important';
    //     }
    //     if (selected) {
    //         this.setState({ selectedDay: undefined });
    //         this.props.onDateChange(undefined);
    //         return;
    //     }
    //     this.setState({ selectedDay: day });
    //     this.props.onDateChange(day);
    // }