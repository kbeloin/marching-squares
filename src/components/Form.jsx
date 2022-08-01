import styles from "./Form.module.css";

export const Form = ({ setDimensions, resolution, showPoints }) => {
  return (
    <div className={styles.form}>
      <label>
        Resolution
        <input
          type="range"
          className={styles.slider}
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
        <span>Points</span>
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};
