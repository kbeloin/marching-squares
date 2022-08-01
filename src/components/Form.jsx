import styles from "./Form.module.css";

export const Form = ({ setDimensions, resolution, showPoints }) => {
  return (
    <div className={styles.form}>
      <label>
        Resolution
        <input
          type="range"
          className={styles.slider}
          name="resolution"
          min="2"
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
        Show Points
        <input
          type="checkbox"
          name="showPoints"
          value={showPoints}
          onChange={(e) =>
            setDimensions((state) => ({
              ...state,
              [e.target.name]: e.target.checked,
            }))
          }
        />
      </label>
    </div>
  );
};
