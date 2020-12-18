import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {  
  return (
    <ul className="TimelineEvent">
        <li>person: {props.person}</li>
        <li>status: {props.status}</li>
        <li>timeStamp: <Timestamp time={props.timeStamp} /></li>
    </ul>
  );
}

export default TimelineEvent;