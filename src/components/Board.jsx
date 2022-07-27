import useBoard from "../hooks/useBoard";
import useInterval from "../hooks/useInterval";
import styles from "./Board.module.css";
import icons from "../utils/icons";
import { useRef } from "react";

export default function Board({ resolution, width, height, color }) {
  const ref = useRef(null);

  let { generateBoard } = useBoard({
    resolution,
    width,
    height,
    color,
    ref,
  });

  const { toggle, isRunning } = useInterval(generateBoard, 100);

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
