import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/it';
import styles from './styles.scss';


class DatePick extends React.Component{
    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            selectedDay: undefined
        };
    }

    handleDayChange(day) {
        if (selected) {
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day });
    }
    render(){
        return(
            <div className={styles.dateInputConainer}>
                <DayPickerInput onDayClick={this.handleDayClick}
                                selectedDays={this.state.selectedDay}
                                formatDate={formatDate}
                                parseDate={parseDate}
                                format="L"
                                placeholder={`${formatDate(new Date(), 'L', 'RU')}`}
                                dayPickerProps={{
                                    locale: 'RU',
                                    localeUtils: MomentLocaleUtils,
                                }}
                style
                />
            </div>
        );
    }
}
export default DatePick;
