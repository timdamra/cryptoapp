import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import { FoldingCube } from 'styled-spinkit';
import PropTypes from 'prop-types';
import 'react-day-picker/lib/style.css';

import {
  CalendarEvent,
  CalendarContainer,
  CalendarEventList,
  CalendarButtonControl,
  CalendarButton
} from '../styles/Calendar';
import { fetchICOList } from '../actions';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDays: [],
      ICOtype: 'live'
    };
  }
  componentDidMount = () => {
    this.props.fetchICOList();
  };
  handleDayClick = (day, { selected }) => {
    const { selectedDays } = this.state;

    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  };
  handleICOtype = evt => {
    const ICOtype = evt.target.textContent.toLowerCase();

    this.setState(() => {
      return { ICOtype };
    });
  };
  render() {
    let { ICOtype, selectedDays } = this.state;
    let timesArr;

    if (selectedDays.length > 1) {
      timesArr = selectedDays
        .map(val => {
          return Date.parse(val);
        })
        .sort((a, b) => a - b);
    }

    return (
      <CalendarContainer>
        <DayPicker
          style={{ width: '80%', margin: 'auto' }}
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
        <CalendarButtonControl>
          <CalendarButton
            value="live"
            onClick={this.handleICOtype}
            style={{
              boxShadow:
                this.state.ICOtype === 'live' ? '5px 5px 5px orange' : 'none'
            }}
          >
            LIVE
          </CalendarButton>
          <CalendarButton
            value="upcoming"
            onClick={this.handleICOtype}
            style={{
              boxShadow:
                this.state.ICOtype === 'upcoming'
                  ? '5px 5px 5px orange'
                  : 'none'
            }}
          >
            UPCOMING
          </CalendarButton>
        </CalendarButtonControl>
        <CalendarEventList>
          {this.props.ICOList[ICOtype]
            ? this.props.ICOList[ICOtype]
                .filter(ico => {
                  if (!selectedDays.length) return ico;
                  if (selectedDays.length === 1) {
                    let time = Date.parse(selectedDays[0]);

                    if (
                      Date.parse(ico.start_time) <= time &&
                      Date.parse(ico.end_time) >= time
                    ) {
                      return ico;
                    }
                  }
                  if (selectedDays.length > 1) {
                    if (
                      Date.parse(ico.end_time) < timesArr[timesArr.length - 1]
                    ) {
                      return ico;
                    }
                  }
                })
                .map((val, i) => {
                  return (
                    <CalendarEvent key={i * 2}>
                      <h3>
                        {val.name}
                      </h3>
                      <p>
                        {val.description}
                      </p>
                      <a href={val.website_link}>
                        <img src={val.image} />
                      </a>
                    </CalendarEvent>
                  );
                })
            : <FoldingCube />}
        </CalendarEventList>
      </CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  ICOList: PropTypes.object
};

const mapStateToProps = ({ ICOList }) => {
  return { ICOList };
};

export default connect(mapStateToProps, { fetchICOList })(Calendar);
