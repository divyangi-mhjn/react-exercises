import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);

  const onStart = () => {
    const interval = setInterval(() => setTime((prevState) => prevState + 1), 1000);
    setTimer(interval);
  };

  const onStop = () => {
    clearInterval(timer);
    setTimer(0);
    setTime(0);
  };

  const onPause = () => {
    clearInterval(timer);
  };
  
  return (
    <div className="App">
      <h1>Timer</h1>
      <h4>{time}</h4>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}
