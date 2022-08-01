import useBoard from "../hooks/useBoard";
import useInterval from "../hooks/useInterval";
import styles from "./Board.module.css";
import icons from "../utils/icons";
import { useRef, useContext } from "react";
import { AppContext } from "../App";

export default function Board({ width, height, color }) {
  const { showPoints, resolution, speed } = useContext(AppContext);
  const ref = useRef(null);

  let { shiftBoard } = useBoard({
    showPoints,
    resolution,
    width,
    height,
    color,
    ref,
  });

  const { toggle, isRunning } = useInterval(shiftBoard, speed);

  return (
    <div className={styles.container}>
      <canvas
        ref={ref}
        className={styles.board}
        width={width}
        height={height}
      />
      <button className={styles.button} onClick={() => toggle()}>
        {isRunning ? icons("pause") : icons("play")}
      </button>
    </div>
  );
}
