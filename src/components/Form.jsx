import styles from "./Form.module.css";
// import icons from "../utils/icons";

export const Form = ({ setDimensions, resolution, showPoints, speed }) => {
  return (
    <div className={styles.form}>
      <label>
        <span>
          Resolution
          {/* <span className={styles.info}>{icons("info")}</span> */}
        </span>
        <input
          type="range"
          className={`${styles.slider} ${styles.resolution}`}
          style={{
            "--value": `${resolution}`,
            "--offset": `${resolution}%`,
          }}
          name="resolution"
          min="4"
          max="100"
          value={resolution}
          onChange={(e) =>
            setDimensions((state) => ({
              ...state,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>
      <label>
        <span>
          Speed
          {/* <span className={styles.info}>{icons("info")}</span> */}
        </span>
        <input
          type="range"
          id="speed"
          className={`${styles.slider} ${styles.speed}`}
          style={{
            "--value": `${speed}`,
            "--offset": `${speed}%`,
          }}
          name="speed"
          min="10"
          max="300"
          step={10}
          value={speed}
          onChange={(e) =>
            setDimensions((state) => ({
              ...state,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
      </label>

      <input
        type="checkbox"
        name="showPoints"
        id="showPoints"
        value={showPoints}
        defaultChecked={true}
        onChange={(e) =>
          setDimensions((state) => ({
            ...state,
            [e.target.name]: e.target.checked,
          }))
        }
      />
      <label htmlFor={"showPoints"}>
        <span>
          Points
          {/* <span className={styles.info}>{icons("info")}</span> */}
        </span>
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};
