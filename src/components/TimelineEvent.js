import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {  
  return (
    <ul className="TimelineEvent">
        <li>person: {props.person}</li>
        <li>status: {props.status}</li>
        <li>timeStamp: <Timestamp time={props.timeStamp} /></li>
    </ul>
  )

  TimelineEvent.propTypes = {
    person: PropTypes.string.isRequired,
    status: PropTypes.string,
    timeStamp: PropTypes.instanceOf(Timestamp)
  }
};

export default TimelineEvent;