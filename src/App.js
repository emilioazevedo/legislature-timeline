import React from 'react';
import ExampleTimeline from './components/LegislativeTimeline';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="mb-4">Legislative Timeline</h1>
        <ExampleTimeline />
      </div>
    </div>
  );
}

export default App;