import React, { useState, useEffect } from "react";

const TimerUseEffEg = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect started");

    // Start an interval that updates count every second
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("Timer running...");
    }, 1000);

    // Cleanup function (runs when component unmounts or effect re-runs)
    return () => {
      clearInterval(timer);
      console.log("Cleanup: Timer stopped!");
    };
  }, []); // Runs only on mount

  return (
    <div>
      <h2>Timer: {count} seconds</h2>
    </div>
  );
};

export default TimerUseEffEg;
