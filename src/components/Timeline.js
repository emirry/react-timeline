import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
  const eventsComponent = props.events.map((event) => {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        key={event.timeStamp}
      />
    );
  });
  
  return (
    <ul className="Timeline">
      {eventsComponent}
    </ul>
  );
}

export default Timeline;