import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

// const timeData = [
//   {
//     person: 'Emily',
//     status: 'Blah Blah',
//     timeStamp: '3 days ago',
//   }
// ]

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <TimelineEvent 
          person="Emily" 
          status="Blah" 
        />
        {/* <Timestamp /> */}
      </main>
    </div>
  );
}

export default App;
