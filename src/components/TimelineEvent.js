import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {  
  return (
    <article className="timeline-event">
        <p className="event-person">person: {props.person}</p>
        <p className="event-status">status: {props.status}</p>
        <p className='event-time'>timeStamp: <Timestamp time={props.timeStamp} /></p>
    </article>
  )
  }
  TimelineEvent.propTypes = {
    timelineevent: PropTypes.shape({
      person: PropTypes.string.isRequired,
      status: PropTypes.string,
      timeStamp: PropTypes.instanceOf(Date)
    })
  };

export default TimelineEvent;
