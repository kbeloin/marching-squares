import "./App.css";
import Board from "./components/Board";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState({
    primary: getComputedStyle(document.body).getPropertyValue(
      "--color-primary"
    ),

    secondary: getComputedStyle(document.body).getPropertyValue(
      "--color-secondary"
    ),
  });

  const [{ resolution, width, height }, setDimensions] = useState({
    resolution: 5,
    width: 500,
    height: 500,
  });

  const [boardElement, setBoardElement] = useState();

  const boardEl = useCallback(
    () => (
      <Board
        resolution={resolution}
        width={width}
        height={height}
        color={color}
      />
    ),
    [resolution, width, height, color]
  );

  useEffect(() => {
    if (color.primary === color.secondary) {
      setColor({
        primary: getComputedStyle(document.body).getPropertyValue(
          "--color-primary"
        ),
        secondary: getComputedStyle(document.body).getPropertyValue(
          "--color-secondary"
        ),
      });
    }
  }, [color.primary, color.secondary]);

  useEffect(() => {
    setBoardElement(boardEl());
  }, [boardEl]);

  return (
    <div className="App">
      <header className="App-header"></header>
      {boardElement}
      <div>
        <label>
          Resolution:
          <input
            type="number"
            value={resolution}
            onChange={(e) =>
              setDimensions((state) => ({
                ...state,
                resolution: Number(e.target.value),
              }))
            }
          />
        </label>
      </div>
    </div>
  );
}

export default App;
