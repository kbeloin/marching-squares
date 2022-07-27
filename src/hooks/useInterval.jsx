// takes in n number of arguments and returns a function that will be called every n milliseconds

import { useEffect, useRef, useState } from "react";

export default function useInterval(callback, delay) {
  const [isRunning, setIsRunning] = useState(false);
  const savedCallback = useRef();

  const toggle = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (isRunning) {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }
  }, [delay, isRunning]);

  return { toggle, isRunning };
}
