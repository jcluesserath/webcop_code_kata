import React, { useEffect, useState } from "react";
import styles from "@/views/Container/ContainerPage.module.scss";
export const ContainerPage: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinute) => prevMinute + 1);
        } else {
          setSeconds((prevSecond) => prevSecond + 1);
        }
      }, 1000);
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]);

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const startButtonHandler = () => {
    setIsActive(true);
  };

  const stopButtonHandler = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  return (
    <div className={styles.stopwatchWrapper}>
      <h2>Stopwatch</h2>
      <div className={styles.stopwatch} data-testid="stopwatch-container">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div
        className={styles.stopwatchButtonContainer}
        data-testid="stopwatch-button-container"
      >
        <button onClick={startButtonHandler}>Start</button>
        <button onClick={stopButtonHandler}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};
