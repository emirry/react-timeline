import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
  const eventsComponent = props.events.map((events) => {
    return (
      <TimelineEvent
      person={events.person}
      status={events.status}
      timeStamp={events.timeStamp}
      />
    );
  });
  
  return(
    <ul className="Timeline">
      {eventsComponent}
    </ul>
  );
}

export default Timeline;