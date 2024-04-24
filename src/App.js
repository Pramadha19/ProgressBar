import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="App">
      <h3>Progress Bar</h3>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        >
          <div className="progress-text">{progress}%</div>
        </div>
      </div>
      {progress === 100 ? (
        <h4 className="loading-text">Completed</h4>
      ) : (
        <h4 className="loading-text">Loading...</h4>
      )}
    </div>
  );
}

export default App;